exports.handler = async (event) => {
  // Handle CORS Preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      },
      body: ''
    };
  }

  const url = (event.queryStringParameters && event.queryStringParameters.url) || 
              (event.body ? (() => { try { return JSON.parse(event.body).url; } catch(e) { return null; } })() : null);

  if (!url) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Missing url parameter' })
    };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    clearTimeout(timeout);

    const html = await res.text();

    let role = '';
    let company = '';
    let location = '';
    let salary = '';
    let notes = '';

    // 1. Try Schema.org JobPosting JSON-LD
    const jsonLdMatches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
    for (const match of jsonLdMatches) {
      try {
        const data = JSON.parse(match[1]);
        const job = data['@type'] === 'JobPosting' ? data : (Array.isArray(data['@graph']) ? data['@graph'].find(g => g['@type'] === 'JobPosting') : null);
        if (job) {
          if (job.title) role = job.title;
          if (job.hiringOrganization && job.hiringOrganization.name) {
            company = job.hiringOrganization.name;
          }
          if (job.jobLocation) {
            const addr = job.jobLocation.address || job.jobLocation;
            location = [addr.addressLocality, addr.addressRegion, addr.addressCountry].filter(Boolean).join(', ');
          }
          if (job.baseSalary && job.baseSalary.value) {
            const val = job.baseSalary.value.value || job.baseSalary.value;
            salary = `${job.baseSalary.currency || ''} ${val}`.trim();
          }
          if (job.description) {
            // strip html tags
            notes = job.description.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 180);
          }
          break;
        }
      } catch (e) {}
    }

    // 2. OpenGraph and Title Fallbacks
    const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const ogSiteName = html.match(/<meta property="og:site_name" content="([^"]+)"/i);
    const ogDescMatch = html.match(/<meta property="og:description" content="([^"]+)"/i) || html.match(/<meta name="description" content="([^"]+)"/i);

    const rawTitle = ogTitleMatch ? ogTitleMatch[1] : (titleMatch ? titleMatch[1].trim() : '');

    // Deloitte pattern: "Check out this job at Deloitte, Senior Product Specialist- Business Experience Designer"
    const checkOutMatch = rawTitle.match(/Check out this job at\s+([^,]+),\s*(.*)/i);
    if (checkOutMatch) {
      if (!company) company = checkOutMatch[1].trim();
      if (!role) role = checkOutMatch[2].trim();
    }

    // Generic pattern: "{Role} at {Company}"
    if (!role || !company) {
      const atMatch = rawTitle.match(/(.*?)\s+at\s+([A-Za-z0-9&.\s]{2,40})/i);
      if (atMatch) {
        if (!role) role = atMatch[1].trim();
        if (!company) company = atMatch[2].trim();
      }
    }

    // Pattern: "{Company} - {Role}" or "{Role} - {Company}"
    if (!role && rawTitle) {
      const parts = rawTitle.split(/\s*[-–|·•]\s*/);
      if (parts.length >= 2) {
        role = parts[0].trim();
        if (!company) company = parts[1].trim();
      } else {
        role = rawTitle.trim();
      }
    }

    if (ogSiteName && !company) {
      company = ogSiteName[1].trim();
    }

    // 3. Extract Location from HTML/Description if not found
    if (!location) {
      const cityMatch = html.match(/\b(Bangalore|Bengaluru|Hyderabad|Mumbai|Delhi|NCR|Gurgaon|Gurugram|Noida|Pune|Chennai|Kolkata|Ahmedabad|San Francisco|New York|London|Singapore|Berlin|Toronto)\b/i);
      const modeMatch = html.match(/\b(Remote|Hybrid|On-?site|In-office)\b/i);
      if (cityMatch && modeMatch) {
        location = `${cityMatch[0]} (${modeMatch[0]})`;
      } else if (cityMatch) {
        location = cityMatch[0];
      } else if (modeMatch) {
        location = modeMatch[0];
      }
    }

    // 4. Extract Salary from description if not found
    if (!salary && ogDescMatch) {
      const salMatch = ogDescMatch[1].match(/(?:(?:₹|INR|Rs\.?)\s*\d+(?:[.,]\d+)?(?:\s*[-–to]+\s*(?:₹|INR|Rs\.?)?\d+(?:[.,]\d+)?)?\s*(?:LPA|lpa|Lakhs?|lac|k|K)?)|(?:\$\s*\d+k?(?:\s*[-–to]+\s*\$?\d+k?)?)|(?:\d+(?:[.,]\d+)?\s*[-–to]+\s*\d+(?:[.,]\d+)?\s*(?:LPA|lpa|Lakhs?|lac))/i);
      if (salMatch) salary = salMatch[0].trim();
    }

    // 5. Clean Hostname Company Fallback (e.g. usijobs.deloitte.com -> Deloitte)
    if (!company) {
      try {
        const u = new URL(url);
        let host = u.hostname.toLowerCase();
        host = host.replace(/^(?:www|careers|jobs|usi|usijobs|careersusi|recruiting|myworkdayjobs|workday|lever|greenhouse|boards)\./i, '');
        const hostParts = host.split('.');
        if (hostParts.length > 0 && hostParts[0]) {
          company = hostParts[0].charAt(0).toUpperCase() + hostParts[0].slice(1);
        }
      } catch (e) {}
    }

    if (!notes && ogDescMatch) {
      notes = ogDescMatch[1].trim().slice(0, 160);
    }

    // Clean up company (e.g. "Deloitte | India Offices of the US" -> "Deloitte")
    if (company.includes('|')) {
      company = company.split('|')[0].trim();
    } else if (company.includes(' - ')) {
      const cParts = company.split(' - ');
      company = cParts[0].trim();
    }

    // Clean up internal corporate job code prefixes (e.g. "USI-EH27-Consulting-C&M-AM&C-Business Experience Designer")
    if (role.match(/^[A-Z0-9]+-[A-Z0-9]+-[A-Za-z0-9&]+-[A-Za-z0-9&]+-/i)) {
      role = role.replace(/^[A-Z0-9]+-[A-Z0-9]+-[A-Za-z0-9&]+-[A-Za-z0-9&]+-/i, '').trim();
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        role: role.trim(),
        company: company.trim(),
        location: location.trim(),
        salary: salary.trim(),
        link: url,
        notes: notes.trim()
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: err.message, link: url })
    };
  }
};
