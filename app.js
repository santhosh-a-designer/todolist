/**
 * Todoist Style Multi-List Management & Projects Dashboard
 * Supports both Student Fee Batches Trackers, Quick Tasks Lists, and Accurate Weekly/Monthly Analytics
 */

// Default Sample Datasets (August 11, 2026 baseline)
const AUG_11_ISO = new Date(2026, 7, 11, 10, 0, 0).toISOString();

const DEFAULT_FEE_SLOTS = [
  {
    id: 'slot-1',
    name: '8-9AM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-1-1', name: 'Abinaya', fee: 9600, completed: false },
      { id: 's-1-2', name: 'Nikhel Kesani', fee: 4900, completed: true, completedAt: AUG_11_ISO }
    ]
  },
  {
    id: 'slot-2',
    name: '9-10AM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-2-1', name: 'Thenmozhi', fee: 9600, completed: false },
      { id: 's-2-2', name: 'Jana Priya', fee: 9600, completed: false },
      { id: 's-2-3', name: 'Aravind', fee: 4000, completed: false },
      { id: 's-2-4', name: 'Santhosh', fee: 4000, completed: false },
      { id: 's-2-5', name: 'Venkatesh', fee: 4000, completed: false },
      { id: 's-2-6', name: 'Rishikumar', fee: 9600, completed: false }
    ]
  },
  {
    id: 'slot-3',
    name: '₹10-11AM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-3-1', name: 'Priyadarshini', fee: 5400, completed: false },
      { id: 's-3-2', name: 'Wilfred', fee: 5400, completed: false },
      { id: 's-3-3', name: 'Karthick D', fee: 5400, completed: false }
    ]
  },
  {
    id: 'slot-4',
    name: '10.30-11.30AM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-4-1', name: 'Lavina', fee: 5700, completed: false }
    ]
  },
  {
    id: 'slot-5',
    name: '11-12PM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-5-1', name: 'Prasanna', fee: 8100, completed: false },
      { id: 's-5-2', name: 'Nidhish', fee: 8100, completed: false },
      { id: 's-5-3', name: 'Abishek', fee: 8100, completed: false },
      { id: 's-5-4', name: 'Lokesh', fee: 5400, completed: false },
      { id: 's-5-5', name: 'Gokulnath', fee: 8100, completed: false },
      { id: 's-5-6', name: 'Gokul', fee: 5400, completed: false },
      { id: 's-5-7', name: 'Parthasarathy', fee: 8100, completed: false },
      { id: 's-5-8', name: 'Hariharan M', fee: 8100, completed: false },
      { id: 's-5-9', name: 'Hariharan N', fee: 8100, completed: false },
      { id: 's-5-10', name: 'Megalatha', fee: 8100, completed: false },
      { id: 's-5-11', name: 'Poorani', fee: 8100, completed: false },
      { id: 's-5-12', name: 'Deepak', fee: 8100, completed: false },
      { id: 's-5-13', name: 'Prabhu Raj - doubtful course name', fee: 8100, completed: false },
      { id: 's-5-14', name: 'Prakash', fee: 8100, completed: false },
      { id: 's-5-15', name: 'Swathi', fee: 8100, completed: false },
      { id: 's-5-16', name: 'Dhanush', fee: 8100, completed: false },
      { id: 's-5-17', name: 'Krithi', fee: 8100, completed: true, completedAt: AUG_11_ISO }
    ]
  },
  {
    id: 'slot-6',
    name: '6-7PM',
    dateTag: '12 Aug',
    collapsed: false,
    students: [
      { id: 's-6-1', name: 'Dhanalakshmi', fee: 9600, completed: false }
    ]
  },
  {
    id: 'slot-7',
    name: '7-8PM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-7-1', name: 'Lokesh', fee: 8100, completed: false },
      { id: 's-7-2', name: 'Lokesh', fee: 8100, completed: false },
      { id: 's-7-3', name: 'Ebinesar', fee: 6800, completed: false },
      { id: 's-7-4', name: 'Joice Mayer', fee: 6800, completed: false },
      { id: 's-7-5', name: 'Harini', fee: 8100, completed: false },
      { id: 's-7-6', name: 'Rufus Aaron', fee: 8100, completed: false },
      { id: 's-7-7', name: 'Jisha', fee: 3800, completed: false }
    ]
  },
  {
    id: 'slot-8',
    name: '8-9PM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-8-1', name: 'Akash', fee: 9600, completed: false },
      { id: 's-8-2', name: 'Karthik', fee: 9600, completed: false },
      { id: 's-8-3', name: 'Prasanna', fee: 9600, completed: false },
      { id: 's-8-4', name: 'Muni Govindharajan', fee: 4100, completed: false }
    ]
  },
  {
    id: 'slot-9',
    name: '10-12PM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-9-1', name: 'Akshara', fee: 8100, completed: false },
      { id: 's-9-2', name: 'Bavadharani', fee: 8100, completed: false },
      { id: 's-9-3', name: 'Muthulakshmi', fee: 9600, completed: false },
      { id: 's-9-4', name: 'Sona Shree', fee: 9600, completed: false },
      { id: 's-9-5', name: 'Vinoth Kumar', fee: 9600, completed: false }
    ]
  },
  {
    id: 'slot-10',
    name: '11-2PM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-10-1', name: 'Lochini', fee: 9600, completed: false },
      { id: 's-10-2', name: 'Yohamalar', fee: 5400, completed: false },
      { id: 's-10-3', name: 'Karunya', fee: 4000, completed: false },
      { id: 's-10-4', name: 'Lokesh', fee: 4000, completed: false },
      { id: 's-10-5', name: 'Kavitha', fee: 9600, completed: false },
      { id: 's-10-6', name: 'Srimathi', fee: 9600, completed: false },
      { id: 's-10-7', name: 'Ragul', fee: 9600, completed: false },
      { id: 's-10-8', name: 'Dinesh', fee: 9600, completed: false },
      { id: 's-10-9', name: 'Harish', fee: 9600, completed: false },
      { id: 's-10-10', name: 'Lavanya', fee: 5400, completed: false }
    ]
  }
];

const DEFAULT_QUICK_TASKS = [
  { id: 't-1', text: 'Call student parents regarding batch timings', completed: false },
  { id: 't-2', text: 'Review syllabus for 11-12PM batch', completed: true, completedAt: AUG_11_ISO },
  { id: 't-3', text: 'Send fee receipt to Krithi', completed: false }
];

const DEFAULT_PROJECTS = [
  {
    id: 'proj-fees-1',
    name: 'Student Fee Batches',
    type: 'fees',
    color: '#db4c3f',
    slots: DEFAULT_FEE_SLOTS
  },
  {
    id: 'proj-tasks-1',
    name: 'Quick Tasks & Notes',
    type: 'tasks',
    color: '#3b82f6',
    tasks: DEFAULT_QUICK_TASKS
  }
];

const DEFAULT_JOBS = [
  {
    id: 'job-1',
    role: 'Senior Product Designer',
    company: 'Swiggy',
    location: 'Bangalore (Hybrid)',
    salary: '₹24 - 28 LPA',
    link: 'https://careers.swiggy.com',
    status: 'interviewing',
    notes: 'Round 1 Portfolio review cleared. Design assignment submitted.',
    appliedAt: new Date(Date.now() - 4 * 86400000).toISOString()
  },
  {
    id: 'job-2',
    role: 'UI/UX Designer',
    company: 'CRED',
    location: 'Bengaluru (Onsite)',
    salary: '₹22 - 26 LPA',
    link: 'https://cred.club/careers',
    status: 'applied',
    notes: 'Applied via referral by Senior PM.',
    appliedAt: new Date(Date.now() - 2 * 86400000).toISOString()
  }
];

/**
 * Smart string parser: Extracts name and numeric fee if typed like "Aravind - 4000"
 */
function parseNameAndFee(inputStr, fallbackFee = 0) {
  if (!inputStr) return { name: '', fee: fallbackFee };
  const trimmed = inputStr.trim();
  
  const match = trimmed.match(/^(.*?)(?:\s+[-—–:]\s+|\s+-\s*|\s*-\s+)(\d+(?:\.\d+)?)$/);
  if (match) {
    return {
      name: match[1].trim(),
      fee: parseFloat(match[2]) || fallbackFee
    };
  }
  return { name: trimmed, fee: fallbackFee };
}

/**
 * Parses dateTag like "11 Aug" or "12 Aug" into a valid historical ISO string
 */
function parseDateTagToISO(dateTag, fallbackYear = 2026) {
  if (!dateTag) return new Date(fallbackYear, 7, 11, 10, 0, 0).toISOString();
  const months = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };
  const parts = dateTag.trim().split(/[\s\.\-]+/);
  if (parts.length >= 2) {
    const day = parseInt(parts[0], 10);
    const monthStr = parts[1].toLowerCase().substring(0, 3);
    if (!isNaN(day) && months[monthStr] !== undefined) {
      return new Date(fallbackYear, months[monthStr], day, 10, 0, 0).toISOString();
    }
  }
  return new Date(fallbackYear, 7, 11, 10, 0, 0).toISOString();
}

class TodoistMultiApp {
  constructor() {
    this.projects = this.loadProjects();
    this.jobs = this.loadJobs();
    this.activeProjectId = localStorage.getItem('todoist_active_project') || this.projects[0].id;
    this.currentView = window.location.hash === '#jobs' ? 'jobs' : 
                       (window.location.hash === '#analytics' ? 'analytics' : 
                       (window.location.hash === '#dashboard' ? 'dashboard' : 'project'));
    this.analyticsPeriod = 'weekly'; // 'weekly' | 'monthly' | 'all'
    this.jobFilter = 'all'; // 'all' | 'wishlist' | 'applied' | 'interviewing' | 'offered' | 'rejected'
    this.searchQuery = '';
    this.allCollapsed = false;
    this.editingStudentId = null;
    this.editingSlotId = null;
    this.editingTaskId = null;

    // DOM Elements
    this.sidebar = document.getElementById('sidebar');
    this.sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
    this.sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    this.sidebarQuickAddBtn = document.getElementById('sidebarQuickAddBtn');
    this.sidebarQuickAddLabel = document.getElementById('sidebarQuickAddLabel');
    this.sidebarSearchInput = document.getElementById('sidebarSearchInput');
    this.navDashboard = document.getElementById('navDashboard');
    this.navAnalytics = document.getElementById('navAnalytics');
    this.navJobs = document.getElementById('navJobs');
    this.totalProjectsCount = document.getElementById('totalProjectsCount');
    this.totalJobsCount = document.getElementById('totalJobsCount');
    this.sidebarProjectsList = document.getElementById('sidebarProjectsList');
    this.openAddProjectFormBtn = document.getElementById('openAddProjectFormBtn');
    this.inlineAddProjectForm = document.getElementById('inlineAddProjectForm');
    this.newProjectNameInput = document.getElementById('newProjectNameInput');
    this.newProjectTypeSelect = document.getElementById('newProjectTypeSelect');
    this.newProjectColorInput = document.getElementById('newProjectColorInput');
    this.cancelAddProjectBtn = document.getElementById('cancelAddProjectBtn');

    // Sidebar Earnings Card
    this.sidebarEarningsCard = document.getElementById('sidebarEarningsCard');
    this.sidebarCardTitle = document.getElementById('sidebarCardTitle');
    this.sidebarStat1Label = document.getElementById('sidebarStat1Label');
    this.sidebarStat2Label = document.getElementById('sidebarStat2Label');
    this.sidebarTotalEarned = document.getElementById('sidebarTotalEarned');
    this.sidebarTotalPotential = document.getElementById('sidebarTotalPotential');
    this.earningsPercentage = document.getElementById('earningsPercentage');
    this.sidebarProgressFill = document.getElementById('sidebarProgressFill');

    // Main Header Elements
    this.mainViewTitle = document.getElementById('mainViewTitle');
    this.topHeaderRightActions = document.getElementById('topHeaderRightActions');
    this.headerPotentialChip = document.getElementById('headerPotentialChip');
    this.headerEarnedChip = document.getElementById('headerEarnedChip');
    this.headerChip1Label = document.getElementById('headerChip1Label');
    this.headerChip2Label = document.getElementById('headerChip2Label');
    this.headerTotalPotential = document.getElementById('headerTotalPotential');
    this.headerTotalEarned = document.getElementById('headerTotalEarned');
    this.toggleAllSlotsBtn = document.getElementById('toggleAllSlotsBtn');
    this.toggleAllSlotsText = document.getElementById('toggleAllSlotsText');

    // Views
    this.dashboardView = document.getElementById('dashboardView');
    this.dashboardGrid = document.getElementById('dashboardGrid');
    this.analyticsView = document.getElementById('analyticsView');
    this.jobsView = document.getElementById('jobsView');
    this.slotsContainer = document.getElementById('slotsContainer');
    this.quickTasksContainer = document.getElementById('quickTasksContainer');
    this.quickTasksList = document.getElementById('quickTasksList');
    this.addSlotSection = document.getElementById('addSlotSection');

    // Job Tracker View Elements
    this.toggleSmartAddBtn = document.getElementById('toggleSmartAddBtn');
    this.smartAddCard = document.getElementById('smartAddCard');
    this.closeSmartAddBtn = document.getElementById('closeSmartAddBtn');
    this.smartDropZone = document.getElementById('smartDropZone');
    this.jobImageFileInput = document.getElementById('jobImageFileInput');
    this.ocrStatusOverlay = document.getElementById('ocrStatusOverlay');
    this.ocrStatusText = document.getElementById('ocrStatusText');
    this.smartTextInput = document.getElementById('smartTextInput');
    this.parseTextBtn = document.getElementById('parseTextBtn');
    this.jobForm = document.getElementById('jobForm');
    this.jobRoleInput = document.getElementById('jobRoleInput');
    this.jobCompanyInput = document.getElementById('jobCompanyInput');
    this.jobLocationInput = document.getElementById('jobLocationInput');
    this.jobSalaryInput = document.getElementById('jobSalaryInput');
    this.jobLinkInput = document.getElementById('jobLinkInput');
    this.jobStatusSelect = document.getElementById('jobStatusSelect');
    this.jobNotesInput = document.getElementById('jobNotesInput');
    this.cancelJobBtn = document.getElementById('cancelJobBtn');
    this.jobCardsGrid = document.getElementById('jobCardsGrid');
    this.jobStatusTabs = document.getElementById('jobStatusTabs');

    // Pipeline Stats Elements
    this.jobStatApplied = document.getElementById('jobStatApplied');
    this.jobStatInterviewing = document.getElementById('jobStatInterviewing');
    this.jobStatOffers = document.getElementById('jobStatOffers');
    this.jobStatResponseRate = document.getElementById('jobStatResponseRate');

    // Analytics Elements
    this.summaryCard1Label = document.getElementById('summaryCard1Label');
    this.summaryEarnedValue = document.getElementById('summaryEarnedValue');
    this.summaryEarnedSub = document.getElementById('summaryEarnedSub');
    this.summaryCard2Label = document.getElementById('summaryCard2Label');
    this.summaryCompletedCount = document.getElementById('summaryCompletedCount');
    this.summaryCompletionRate = document.getElementById('summaryCompletionRate');
    this.summaryRemainingValue = document.getElementById('summaryRemainingValue');
    this.summaryPendingCount = document.getElementById('summaryPendingCount');
    this.chartTitle = document.getElementById('chartTitle');
    this.chartTotalBadge = document.getElementById('chartTotalBadge');
    this.barChartContainer = document.getElementById('barChartContainer');
    this.ledgerList = document.getElementById('ledgerList');
    this.ledgerCountBadge = document.getElementById('ledgerCountBadge');

    // Add Slot Form elements
    this.showAddSlotFormBtn = document.getElementById('showAddSlotFormBtn');
    this.inlineAddSlotForm = document.getElementById('inlineAddSlotForm');
    this.newSlotNameInput = document.getElementById('newSlotNameInput');
    this.newSlotDateInput = document.getElementById('newSlotDateInput');
    this.cancelAddSlotBtn = document.getElementById('cancelAddSlotBtn');

    // Add Quick Task Form elements
    this.showQuickTaskFormBtn = document.getElementById('showQuickTaskFormBtn');
    this.inlineQuickTaskForm = document.getElementById('inlineQuickTaskForm');
    this.quickTaskTextInput = document.getElementById('quickTaskTextInput');
    this.cancelQuickTaskBtn = document.getElementById('cancelQuickTaskBtn');

    this.toastContainer = document.getElementById('toastContainer');

    this.init();
  }

  get activeProject() {
    return this.projects.find(p => p.id === this.activeProjectId) || this.projects[0];
  }

  formatCurrency(amount) {
    const num = Number(amount) || 0;
    return `₹${num.toLocaleString('en-IN')}`;
  }

  loadJobs() {
    try {
      const saved = localStorage.getItem('todoist_jobs_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load jobs from localStorage', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_JOBS));
  }

  saveJobs() {
    try {
      localStorage.setItem('todoist_jobs_data', JSON.stringify(this.jobs));
    } catch (e) {
      console.error('Failed to save jobs to localStorage', e);
    }
  }

  loadProjects() {
    try {
      const saved = localStorage.getItem('todoist_projects_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          parsed.forEach(p => {
            if (p.slots) {
              p.slots.forEach(slot => {
                const slotHistoricalISO = parseDateTagToISO(slot.dateTag);
                if (slot.students) {
                  slot.students.forEach(s => {
                    if (s.name && s.name.toLowerCase().includes('nikhel') && s.fee === 2200) {
                      s.fee = 4900;
                    }
                    // If an item was completed without an explicit user timestamp, associate with its slot dateTag
                    if (s.completed && (!s.completedAt || !s.userSetTimestamp)) {
                      s.completedAt = slotHistoricalISO;
                    }
                  });
                }
              });
            }
            if (p.tasks) {
              p.tasks.forEach(t => {
                if (t.completed && (!t.completedAt || !t.userSetTimestamp)) {
                  t.completedAt = AUG_11_ISO;
                }
              });
            }
          });
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load projects from localStorage', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  }

  saveProjects() {
    try {
      localStorage.setItem('todoist_projects_data', JSON.stringify(this.projects));
      localStorage.setItem('todoist_active_project', this.activeProjectId);
    } catch (e) {
      console.error('Failed to save projects to localStorage', e);
    }
  }

  init() {
    this.bindEvents();
    this.setupJobEventListeners();
    this.render();
  }

  bindEvents() {
    // Mobile sidebar toggle
    if (this.sidebarOpenBtn) {
      this.sidebarOpenBtn.addEventListener('click', () => {
        this.sidebar.classList.add('open');
      });
    }

    if (this.sidebarCloseBtn) {
      this.sidebarCloseBtn.addEventListener('click', () => {
        this.sidebar.classList.remove('open');
      });
    }

    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 840 && this.sidebar.classList.contains('open')) {
        if (!this.sidebar.contains(e.target) && !this.sidebarOpenBtn.contains(e.target)) {
          this.sidebar.classList.remove('open');
        }
      }
    });

    // Sidebar Dashboard link
    if (this.navDashboard) {
      this.navDashboard.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = 'dashboard';
        this.currentView = 'dashboard';
        this.render();
      });
    }

    // Sidebar Analytics link
    if (this.navAnalytics) {
      this.navAnalytics.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = 'analytics';
        this.currentView = 'analytics';
        this.render();
      });
    }

    // Sidebar Jobs link
    if (this.navJobs) {
      this.navJobs.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = 'jobs';
        this.currentView = 'jobs';
        this.render();
      });
    }

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      if (hash === '#jobs') {
        this.currentView = 'jobs';
      } else if (hash === '#analytics') {
        this.currentView = 'analytics';
      } else if (hash === '#dashboard') {
        this.currentView = 'dashboard';
      }
      this.render();
    });

    // Analytics Period Tabs
    const periodTabs = document.querySelectorAll('.period-tab');
    periodTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        periodTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.analyticsPeriod = tab.getAttribute('data-period') || 'weekly';
        this.renderAnalyticsView();
      });
    });

    // Sidebar Quick Add button
    if (this.sidebarQuickAddBtn) {
      this.sidebarQuickAddBtn.addEventListener('click', () => {
        if (this.currentView === 'dashboard' || this.currentView === 'analytics') {
          this.openAddProjectForm();
        } else if (this.currentView === 'jobs') {
          this.openAddJobForm();
        } else if (this.activeProject.type === 'fees') {
          this.openAddSlotForm();
        } else {
          this.openQuickTaskForm();
        }
      });
    }

    // Search filter
    if (this.sidebarSearchInput) {
      this.sidebarSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    // Add Project Sidebar triggers
    if (this.openAddProjectFormBtn) {
      this.openAddProjectFormBtn.addEventListener('click', () => this.openAddProjectForm());
    }

    if (this.cancelAddProjectBtn) {
      this.cancelAddProjectBtn.addEventListener('click', () => {
        this.inlineAddProjectForm.classList.add('hidden');
        this.newProjectNameInput.value = '';
      });
    }

    if (this.inlineAddProjectForm) {
      this.inlineAddProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = this.newProjectNameInput.value.trim();
        const type = this.newProjectTypeSelect.value;
        const color = this.newProjectColorInput.value || '#db4c3f';
        if (!name) return;

        const newProject = {
          id: 'proj-' + Date.now(),
          name,
          type,
          color,
          slots: type === 'fees' ? [] : undefined,
          tasks: type === 'tasks' ? [] : undefined
        };

        this.projects.push(newProject);
        this.activeProjectId = newProject.id;
        this.currentView = 'project';
        this.saveProjects();
        this.render();

        this.newProjectNameInput.value = '';
        this.inlineAddProjectForm.classList.add('hidden');
        this.showToast(`Project "${name}" created!`);
      });
    }

    // Fee Project: Add Slot handlers
    if (this.showAddSlotFormBtn) {
      this.showAddSlotFormBtn.addEventListener('click', () => this.openAddSlotForm());
    }

    if (this.cancelAddSlotBtn) {
      this.cancelAddSlotBtn.addEventListener('click', () => {
        this.inlineAddSlotForm.classList.add('hidden');
        this.showAddSlotFormBtn.style.display = 'flex';
        this.newSlotNameInput.value = '';
      });
    }

    if (this.inlineAddSlotForm) {
      this.inlineAddSlotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = this.newSlotNameInput.value.trim();
        const dateTag = this.newSlotDateInput.value.trim() || '11 Aug';
        if (!name) return;

        const newSlot = {
          id: 'slot-' + Date.now(),
          name,
          dateTag,
          collapsed: false,
          students: []
        };

        if (!this.activeProject.slots) this.activeProject.slots = [];
        this.activeProject.slots.push(newSlot);
        this.saveProjects();
        this.render();

        this.newSlotNameInput.value = '';
        this.inlineAddSlotForm.classList.add('hidden');
        this.showAddSlotFormBtn.style.display = 'flex';
        this.showToast(`Time slot "${name}" added!`);
      });
    }

    // Quick Task Form handlers
    if (this.showQuickTaskFormBtn) {
      this.showQuickTaskFormBtn.addEventListener('click', () => this.openQuickTaskForm());
    }

    if (this.cancelQuickTaskBtn) {
      this.cancelQuickTaskBtn.addEventListener('click', () => {
        this.inlineQuickTaskForm.classList.add('hidden');
        this.showQuickTaskFormBtn.style.display = 'flex';
        this.quickTaskTextInput.value = '';
      });
    }

    if (this.inlineQuickTaskForm) {
      this.inlineQuickTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = this.quickTaskTextInput.value.trim();
        if (!text) return;

        const newTask = {
          id: 't-' + Date.now(),
          text,
          completed: false
        };

        if (!this.activeProject.tasks) this.activeProject.tasks = [];
        this.activeProject.tasks.push(newTask);
        this.saveProjects();
        this.render();

        this.quickTaskTextInput.value = '';
        this.quickTaskTextInput.focus();
        this.showToast(`Task added!`);
      });
    }

    // Collapse All Slots
    if (this.toggleAllSlotsBtn) {
      this.toggleAllSlotsBtn.addEventListener('click', () => {
        if (!this.activeProject.slots) return;
        this.allCollapsed = !this.allCollapsed;
        this.activeProject.slots.forEach(slot => {
          slot.collapsed = this.allCollapsed;
        });
        if (this.toggleAllSlotsText) {
          this.toggleAllSlotsText.textContent = this.allCollapsed ? 'Expand all' : 'Collapse all';
        }
        this.saveProjects();
        this.render();
      });
    }
  }

  openAddProjectForm() {
    this.inlineAddProjectForm.classList.remove('hidden');
    this.newProjectNameInput.focus();
  }

  openAddSlotForm() {
    this.inlineAddSlotForm.classList.remove('hidden');
    this.showAddSlotFormBtn.style.display = 'none';
    this.newSlotNameInput.focus();
    this.inlineAddSlotForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  openQuickTaskForm() {
    this.inlineQuickTaskForm.classList.remove('hidden');
    this.showQuickTaskFormBtn.style.display = 'none';
    this.quickTaskTextInput.focus();
  }

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }

  calculateProjectStats(project) {
    if (project.type === 'fees') {
      let totalGross = 0;
      let totalEarned = 0;
      let potentialRemaining = 0;
      let totalStudents = 0;
      let completedStudents = 0;

      (project.slots || []).forEach(slot => {
        (slot.students || []).forEach(student => {
          const fee = Number(student.fee) || 0;
          totalGross += fee;
          totalStudents += 1;
          if (student.completed) {
            totalEarned += fee;
            completedStudents += 1;
          } else {
            potentialRemaining += fee;
          }
        });
      });

      const percentage = totalGross > 0 ? Math.round((totalEarned / totalGross) * 100) : 0;
      return {
        type: 'fees',
        totalGross,
        totalEarned,
        potentialRemaining,
        percentage,
        totalCount: totalStudents,
        completedCount: completedStudents,
        pendingCount: totalStudents - completedStudents
      };
    } else {
      const tasks = project.tasks || [];
      const totalCount = tasks.length;
      const completedCount = tasks.filter(t => t.completed).length;
      const pendingCount = totalCount - completedCount;
      const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
      return {
        type: 'tasks',
        totalCount,
        completedCount,
        pendingCount,
        percentage
      };
    }
  }

  render() {
    this.renderSidebarProjects();

    if (this.currentView === 'dashboard') {
      this.renderDashboardView();
    } else if (this.currentView === 'analytics') {
      this.renderAnalyticsView();
    } else if (this.currentView === 'jobs') {
      this.renderJobsView();
    } else {
      this.renderProjectView();
    }
  }

  renderSidebarProjects() {
    if (this.totalProjectsCount) {
      this.totalProjectsCount.textContent = this.projects.length;
    }

    if (this.navDashboard) {
      this.navDashboard.classList.toggle('active', this.currentView === 'dashboard');
    }

    if (this.navAnalytics) {
      this.navAnalytics.classList.toggle('active', this.currentView === 'analytics');
    }

    if (this.navJobs) {
      this.navJobs.classList.toggle('active', this.currentView === 'jobs');
    }

    if (this.totalJobsCount) {
      this.totalJobsCount.textContent = this.jobs.length;
    }

    if (!this.sidebarProjectsList) return;
    this.sidebarProjectsList.innerHTML = '';

    this.projects.forEach(project => {
      const stats = this.calculateProjectStats(project);
      const item = document.createElement('div');
      item.className = `project-nav-item ${this.currentView === 'project' && project.id === this.activeProjectId ? 'active' : ''}`;
      item.innerHTML = `
        <span class="project-dot" style="background-color: ${project.color || '#db4c3f'};"></span>
        <span class="project-nav-name">${escapeHTML(project.name)}</span>
        <span class="nav-count">${stats.pendingCount}</span>
      `;

      item.addEventListener('click', () => {
        this.activeProjectId = project.id;
        this.currentView = 'project';
        this.saveProjects();
        this.render();
      });

      this.sidebarProjectsList.appendChild(item);
    });

    // Update Sidebar Quick Add label
    if (this.sidebarQuickAddLabel) {
      if (this.currentView === 'dashboard' || this.currentView === 'analytics') {
        this.sidebarQuickAddLabel.textContent = 'Add project';
      } else if (this.currentView === 'jobs') {
        this.sidebarQuickAddLabel.textContent = 'Add job';
      } else if (this.activeProject.type === 'fees') {
        this.sidebarQuickAddLabel.textContent = 'Add time slot';
      } else {
        this.sidebarQuickAddLabel.textContent = 'Add quick task';
      }
    }
  }

  renderDashboardView() {
    this.dashboardView.classList.remove('hidden');
    this.analyticsView.classList.add('hidden');
    if (this.jobsView) this.jobsView.classList.add('hidden');
    this.slotsContainer.classList.add('hidden');
    this.quickTasksContainer.classList.add('hidden');
    this.addSlotSection.classList.add('hidden');

    this.mainViewTitle.textContent = 'All Projects Dashboard';
    this.topHeaderRightActions.classList.add('hidden');

    this.sidebarEarningsCard.style.display = 'none';
    this.dashboardGrid.innerHTML = '';

    this.projects.forEach(project => {
      const stats = this.calculateProjectStats(project);
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.borderTop = `3.5px solid ${project.color || '#db4c3f'}`;
      card.innerHTML = `
        <div>
          <div class="project-card-top">
            <div class="card-title-row">
              <span class="project-dot" style="background-color: ${project.color || '#db4c3f'};"></span>
              <span class="project-card-name">${escapeHTML(project.name)}</span>
            </div>
            <span class="type-badge ${project.type}">${project.type === 'fees' ? 'Fee Tracker' : 'Quick Tasks'}</span>
          </div>

          <div class="project-metrics-grid">
            ${project.type === 'fees' ? `
              <div class="metric-box">
                <span class="metric-label">Remaining</span>
                <span class="metric-val">${this.formatCurrency(stats.potentialRemaining)}</span>
              </div>
              <div class="metric-box">
                <span class="metric-label">Collected</span>
                <span class="metric-val success">${this.formatCurrency(stats.totalEarned)}</span>
              </div>
            ` : `
              <div class="metric-box">
                <span class="metric-label">Pending</span>
                <span class="metric-val">${stats.pendingCount} tasks</span>
              </div>
              <div class="metric-box">
                <span class="metric-label">Completed</span>
                <span class="metric-val success">${stats.completedCount} tasks</span>
              </div>
            `}
          </div>

          <div class="progress-bar-container" style="margin-bottom: 0;">
            <div class="progress-bar-fill" style="width: ${stats.percentage}%;"></div>
          </div>
        </div>

        <div class="project-card-actions">
          <button class="card-open-btn">Open List &rarr;</button>
          ${this.projects.length > 1 ? `
            <button class="icon-btn danger delete-project-btn" title="Delete project">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          ` : ''}
        </div>
      `;

      card.addEventListener('click', () => {
        this.activeProjectId = project.id;
        this.currentView = 'project';
        this.saveProjects();
        this.render();
      });

      const deleteBtn = card.querySelector('.delete-project-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm(`Delete project "${project.name}"?`)) {
            this.projects = this.projects.filter(p => p.id !== project.id);
            this.activeProjectId = this.projects[0].id;
            this.saveProjects();
            this.render();
            this.showToast(`Deleted "${project.name}"`);
          }
        });
      }

      this.dashboardGrid.appendChild(card);
    });

    // Create New Project Card
    const createCard = document.createElement('div');
    createCard.className = 'project-card create-project-card';
    createCard.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <span>Create New List</span>
    `;
    createCard.addEventListener('click', () => this.openAddProjectForm());
    this.dashboardGrid.appendChild(createCard);
  }

  renderAnalyticsView() {
    this.dashboardView.classList.add('hidden');
    this.analyticsView.classList.remove('hidden');
    if (this.jobsView) this.jobsView.classList.add('hidden');
    this.slotsContainer.classList.add('hidden');
    this.quickTasksContainer.classList.add('hidden');
    this.addSlotSection.classList.add('hidden');

    this.mainViewTitle.textContent = 'Analytics & Reports';
    this.topHeaderRightActions.classList.add('hidden');
    this.sidebarEarningsCard.style.display = 'none';

    // Collect all completed items across projects
    const allCompletedPayments = [];
    let grandTotalGross = 0;
    let grandTotalEarned = 0;
    let grandTotalPending = 0;
    let totalPendingStudentsCount = 0;

    this.projects.forEach(p => {
      if (p.slots) {
        p.slots.forEach(slot => {
          (slot.students || []).forEach(student => {
            const fee = Number(student.fee) || 0;
            grandTotalGross += fee;
            if (student.completed) {
              grandTotalEarned += fee;
              const dateObj = student.completedAt ? new Date(student.completedAt) : new Date(parseDateTagToISO(slot.dateTag));
              allCompletedPayments.push({
                id: student.id,
                name: student.name,
                fee: fee,
                slotName: slot.name,
                projectName: p.name,
                completedAt: dateObj,
                ref: student,
                isTask: false
              });
            } else {
              grandTotalPending += fee;
              totalPendingStudentsCount += 1;
            }
          });
        });
      }
      if (p.tasks) {
        (p.tasks || []).forEach(task => {
          if (task.completed) {
            const dateObj = task.completedAt ? new Date(task.completedAt) : new Date(AUG_11_ISO);
            allCompletedPayments.push({
              id: task.id,
              name: task.text,
              fee: 0,
              slotName: 'Quick Tasks',
              projectName: p.name,
              completedAt: dateObj,
              ref: task,
              isTask: true
            });
          }
        });
      }
    });

    // Date filtering logic
    const now = new Date();
    
    // Start of Week (Monday 00:00)
    const startOfWeek = new Date(now);
    const currentDay = now.getDay();
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    startOfWeek.setDate(now.getDate() + distanceToMonday);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    // Start of Month (1st of current month)
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    let filteredItems = [];
    let periodLabel = 'This Week';
    let chartTitleText = 'Daily Collections Breakdown';

    if (this.analyticsPeriod === 'weekly') {
      periodLabel = 'This Week';
      chartTitleText = 'Daily Collections This Week';
      filteredItems = allCompletedPayments.filter(item => item.completedAt >= startOfWeek && item.completedAt <= endOfWeek);
    } else if (this.analyticsPeriod === 'monthly') {
      periodLabel = 'This Month';
      chartTitleText = 'Weekly Collections This Month';
      filteredItems = allCompletedPayments.filter(item => item.completedAt >= startOfMonth && item.completedAt <= endOfMonth);
    } else {
      periodLabel = 'All Time';
      chartTitleText = 'All-Time Collections Breakdown';
      filteredItems = [...allCompletedPayments];
    }

    // Calculate metrics for current period
    let periodEarned = 0;
    let periodCompletedCount = filteredItems.length;
    filteredItems.forEach(item => {
      periodEarned += item.fee;
    });

    const overallRate = grandTotalGross > 0 ? Math.round((grandTotalEarned / grandTotalGross) * 100) : 0;

    // Update Hero Cards
    if (this.summaryCard1Label) this.summaryCard1Label.textContent = `Earned (${periodLabel})`;
    if (this.summaryEarnedValue) this.summaryEarnedValue.textContent = this.formatCurrency(periodEarned);
    if (this.summaryEarnedSub) this.summaryEarnedSub.textContent = `${periodCompletedCount} completed items`;

    if (this.summaryCard2Label) this.summaryCard2Label.textContent = `Completed (${periodLabel})`;
    if (this.summaryCompletedCount) this.summaryCompletedCount.textContent = periodCompletedCount;
    if (this.summaryCompletionRate) this.summaryCompletionRate.textContent = `${overallRate}% all-time collection rate`;

    if (this.summaryRemainingValue) this.summaryRemainingValue.textContent = this.formatCurrency(grandTotalPending);
    if (this.summaryPendingCount) this.summaryPendingCount.textContent = `${totalPendingStudentsCount} pending student fees`;

    if (this.chartTitle) this.chartTitle.textContent = chartTitleText;
    if (this.chartTotalBadge) this.chartTotalBadge.textContent = `Total: ${this.formatCurrency(periodEarned)}`;

    // Build Chart Bars
    this.renderChartBars(this.analyticsPeriod, filteredItems, startOfWeek, startOfMonth);

    // Build Completed History Ledger
    this.renderLedgerList(filteredItems);
  }

  renderChartBars(period, items, startOfWeek, startOfMonth) {
    if (!this.barChartContainer) return;
    this.barChartContainer.innerHTML = '';

    let barsData = [];

    if (period === 'weekly') {
      // 7 Days: Mon - Sun
      const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      barsData = dayNames.map((name, index) => {
        const dayDate = new Date(startOfWeek);
        dayDate.setDate(startOfWeek.getDate() + index);
        const dayStart = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate(), 0, 0, 0, 0);
        const dayEnd = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate(), 23, 59, 59, 999);

        let sum = 0;
        items.forEach(it => {
          if (it.completedAt >= dayStart && it.completedAt <= dayEnd) {
            sum += it.fee;
          }
        });

        return { label: name, amount: sum };
      });
    } else if (period === 'monthly') {
      // 4-5 Weeks of the month
      const weekLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
      barsData = weekLabels.map((name, index) => {
        const wStart = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth(), 1 + index * 7, 0, 0, 0);
        const wEnd = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth(), 7 + index * 7, 23, 59, 59, 999);

        let sum = 0;
        items.forEach(it => {
          if (it.completedAt >= wStart && it.completedAt <= wEnd) {
            sum += it.fee;
          }
        });

        return { label: name, amount: sum };
      });
    } else {
      // All Time: Recent Months
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const now = new Date();
      barsData = [];
      for (let i = 5; i >= 0; i--) {
        const mDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const mStart = new Date(mDate.getFullYear(), mDate.getMonth(), 1, 0, 0, 0);
        const mEnd = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 0, 23, 59, 59, 999);

        let sum = 0;
        items.forEach(it => {
          if (it.completedAt >= mStart && it.completedAt <= mEnd) {
            sum += it.fee;
          }
        });

        barsData.push({ label: monthNames[mStart.getMonth()], amount: sum });
      }
    }

    // Find max value to normalize bar heights
    const maxAmount = Math.max(...barsData.map(b => b.amount), 1);

    barsData.forEach(bar => {
      const percent = Math.round((bar.amount / maxAmount) * 100);
      const col = document.createElement('div');
      col.className = 'chart-bar-col';
      col.innerHTML = `
        <span class="chart-bar-val">${bar.amount > 0 ? this.formatCurrency(bar.amount) : ''}</span>
        <div class="chart-bar-wrapper">
          <div class="chart-bar" style="height: ${bar.amount > 0 ? Math.max(percent, 8) : 4}%;"></div>
        </div>
        <span class="chart-bar-label">${bar.label}</span>
      `;
      this.barChartContainer.appendChild(col);
    });
  }

  renderLedgerList(items) {
    if (!this.ledgerList) return;
    this.ledgerList.innerHTML = '';

    if (this.ledgerCountBadge) {
      this.ledgerCountBadge.textContent = `${items.length} records`;
    }

    if (items.length === 0) {
      this.ledgerList.innerHTML = `
        <div class="empty-state" style="padding: 28px 0;">
          <p>No completed payments or tasks recorded for this timeframe.</p>
        </div>
      `;
      return;
    }

    // Sort descending by timestamp
    const sorted = [...items].sort((a, b) => b.completedAt - a.completedAt);

    sorted.forEach(item => {
      const row = document.createElement('div');
      row.className = 'ledger-item';
      
      const timeFormatted = item.completedAt.toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      row.innerHTML = `
        <div class="ledger-item-left">
          <div class="ledger-check-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="ledger-item-info">
            <span class="ledger-item-title">${escapeHTML(item.name)}</span>
            <span class="ledger-item-meta">
              <span>${escapeHTML(item.slotName)}</span>
              <span>•</span>
              <button class="date-edit-btn" title="Click to adjust completion date" style="background: none; border: none; font-size: inherit; color: inherit; cursor: pointer; text-decoration: underline; padding: 0; display: inline-flex; align-items: center; gap: 3px;">
                <span>${timeFormatted}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div class="ledger-item-amount">${item.fee > 0 ? this.formatCurrency(item.fee) : 'Done'}</div>
      `;

      // Allow user to adjust the completion date inline
      const dateBtn = row.querySelector('.date-edit-btn');
      if (dateBtn && item.ref) {
        dateBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isoCurrent = item.completedAt.toISOString().split('T')[0];
          const userDate = prompt(`Change completion date for "${item.name}" (YYYY-MM-DD):`, isoCurrent);
          if (userDate && !isNaN(Date.parse(userDate))) {
            const newDateObj = new Date(userDate + 'T12:00:00');
            item.ref.completedAt = newDateObj.toISOString();
            item.ref.userSetTimestamp = true;
            this.saveProjects();
            this.render();
            this.showToast(`Updated date for ${item.name}`);
          }
        });
      }

      this.ledgerList.appendChild(row);
    });
  }

  renderProjectView() {
    const project = this.activeProject;
    const stats = this.calculateProjectStats(project);

    this.dashboardView.classList.add('hidden');
    this.analyticsView.classList.add('hidden');
    if (this.jobsView) this.jobsView.classList.add('hidden');
    this.topHeaderRightActions.classList.remove('hidden');
    this.mainViewTitle.textContent = project.name;

    // Sidebar Card Updates
    this.sidebarEarningsCard.style.display = 'block';
    if (project.type === 'fees') {
      this.sidebarCardTitle.textContent = 'Fee Collection';
      this.sidebarStat1Label.textContent = 'Total Earned';
      this.sidebarStat2Label.textContent = 'Potential';
      this.sidebarTotalEarned.textContent = this.formatCurrency(stats.totalEarned);
      this.sidebarTotalPotential.textContent = this.formatCurrency(stats.potentialRemaining);
      this.earningsPercentage.textContent = `${stats.percentage}%`;
      this.sidebarProgressFill.style.width = `${stats.percentage}%`;

      // Header chips
      this.headerChip1Label.textContent = 'Potential:';
      this.headerChip2Label.textContent = 'Earned:';
      this.headerTotalPotential.textContent = this.formatCurrency(stats.potentialRemaining);
      this.headerTotalEarned.textContent = this.formatCurrency(stats.totalEarned);
      this.toggleAllSlotsBtn.style.display = 'flex';

      this.slotsContainer.classList.remove('hidden');
      this.quickTasksContainer.classList.add('hidden');
      this.addSlotSection.classList.remove('hidden');
      this.renderFeeSlots(project);
    } else {
      this.sidebarCardTitle.textContent = 'Tasks Progress';
      this.sidebarStat1Label.textContent = 'Completed';
      this.sidebarStat2Label.textContent = 'Pending';
      this.sidebarTotalEarned.textContent = stats.completedCount;
      this.sidebarTotalPotential.textContent = stats.pendingCount;
      this.earningsPercentage.textContent = `${stats.percentage}%`;
      this.sidebarProgressFill.style.width = `${stats.percentage}%`;

      // Header chips
      this.headerChip1Label.textContent = 'Pending:';
      this.headerChip2Label.textContent = 'Completed:';
      this.headerTotalPotential.textContent = `${stats.pendingCount} tasks`;
      this.headerTotalEarned.textContent = `${stats.completedCount} tasks`;
      this.toggleAllSlotsBtn.style.display = 'none';

      this.slotsContainer.classList.add('hidden');
      this.quickTasksContainer.classList.remove('hidden');
      this.addSlotSection.classList.add('hidden');
      this.renderQuickTasks(project);
    }
  }

  renderQuickTasks(project) {
    this.quickTasksList.innerHTML = '';
    const tasks = project.tasks || [];

    const filteredTasks = tasks.filter(t => {
      if (!this.searchQuery) return true;
      return t.text.toLowerCase().includes(this.searchQuery);
    });

    if (filteredTasks.length === 0) {
      this.quickTasksList.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
          </div>
          <div class="empty-state-title">No tasks found</div>
          <p>Click "+ Add task" below to note down your first item.</p>
        </div>
      `;
      return;
    }

    filteredTasks.forEach(task => {
      const row = document.createElement('div');
      row.className = `quick-task-row ${task.completed ? 'completed' : ''}`;
      row.innerHTML = `
        <div class="quick-task-left">
          <button class="todoist-checkbox" title="${task.completed ? 'Mark incomplete' : 'Mark completed'}" aria-label="Toggle task">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
          <span class="quick-task-text" title="Click to edit">${escapeHTML(task.text)}</span>
        </div>
        <div class="quick-task-actions">
          <button class="icon-btn edit-task-btn" title="Edit task">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          <button class="icon-btn danger delete-task-btn" title="Delete task">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;

      // Toggle check
      row.querySelector('.todoist-checkbox').addEventListener('click', (e) => {
        e.stopPropagation();
        task.completed = !task.completed;
        if (task.completed) {
          task.completedAt = new Date().toISOString();
          task.userSetTimestamp = true;
        } else {
          delete task.completedAt;
          delete task.userSetTimestamp;
        }
        this.saveProjects();
        this.render();
      });

      // Edit task inline
      const startEditTask = () => {
        const newText = prompt('Edit task:', task.text);
        if (newText !== null && newText.trim() !== '') {
          task.text = newText.trim();
          this.saveProjects();
          this.render();
        }
      };

      row.querySelector('.quick-task-text').addEventListener('click', startEditTask);
      row.querySelector('.edit-task-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        startEditTask();
      });

      // Delete task
      row.querySelector('.delete-task-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        project.tasks = project.tasks.filter(t => t.id !== task.id);
        this.saveProjects();
        this.render();
        this.showToast('Task removed');
      });

      this.quickTasksList.appendChild(row);
    });
  }

  renderFeeSlots(project) {
    this.slotsContainer.innerHTML = '';
    const slots = project.slots || [];

    const filteredSlots = slots.filter(slot => {
      if (!this.searchQuery) return true;
      const slotMatches = slot.name.toLowerCase().includes(this.searchQuery);
      const studentMatches = (slot.students || []).some(s => s.name.toLowerCase().includes(this.searchQuery) || String(s.fee).includes(this.searchQuery));
      return slotMatches || studentMatches;
    });

    if (filteredSlots.length === 0) {
      this.slotsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <div class="empty-state-title">No time slots found</div>
          <p>Click "+ Add time slot" below to start tracking student fees.</p>
        </div>
      `;
      return;
    }

    filteredSlots.forEach(slot => {
      const slotElement = this.createSlotElement(project, slot);
      this.slotsContainer.appendChild(slotElement);
    });
  }

  createSlotElement(project, slot) {
    const slotCard = document.createElement('div');
    slotCard.className = `slot-section ${slot.collapsed ? 'collapsed' : ''}`;
    slotCard.id = `slot-elem-${slot.id}`;

    let slotTotal = 0;
    let slotEarned = 0;
    let slotCompletedCount = 0;
    (slot.students || []).forEach(s => {
      const fee = Number(s.fee) || 0;
      slotTotal += fee;
      if (s.completed) {
        slotEarned += fee;
        slotCompletedCount += 1;
      }
    });

    const isSlotFullyCompleted = (slot.students || []).length > 0 && slotCompletedCount === slot.students.length;
    const isEditingSlotTitle = this.editingSlotId === slot.id;

    const header = document.createElement('div');
    header.className = 'slot-header';
    header.innerHTML = `
      <div class="slot-header-left">
        <svg class="chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>

        <button class="slot-circle-icon ${isSlotFullyCompleted ? 'completed-slot' : ''}" title="${isSlotFullyCompleted ? 'Mark all unchecked' : 'Mark all completed'}" aria-label="Toggle all students in slot">
          ${isSlotFullyCompleted ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ` : ''}
        </button>

        <div class="slot-meta">
          <div class="slot-title-row">
            ${isEditingSlotTitle ? `
              <input type="text" class="slot-title-edit-input" value="${escapeHTML(slot.name)}" autofocus>
            ` : `
              <span class="slot-title" title="Double click to edit">${escapeHTML(slot.name)}</span>
            `}
            <span class="slot-earnings-badge">${this.formatCurrency(slotEarned)} / ${this.formatCurrency(slotTotal)}</span>
          </div>
          <div class="slot-subtitle-row">
            <span class="subtask-count-badge" title="Completed students count">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>${slotCompletedCount}/${(slot.students || []).length}</span>
            </span>

            <span class="date-tag-badge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>${escapeHTML(slot.dateTag || '11 Aug')}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="slot-header-actions">
        <button class="icon-btn edit-slot-btn" title="Edit slot name" aria-label="Edit slot name">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button class="icon-btn danger delete-slot-btn" title="Delete time slot" aria-label="Delete time slot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    // Toggle collapse
    header.querySelector('.slot-header-left').addEventListener('click', (e) => {
      if (e.target.closest('.slot-circle-icon') || e.target.closest('.slot-title-edit-input')) return;
      slot.collapsed = !slot.collapsed;
      this.saveProjects();
      slotCard.classList.toggle('collapsed', slot.collapsed);
    });

    // Complete all in slot
    header.querySelector('.slot-circle-icon').addEventListener('click', (e) => {
      e.stopPropagation();
      const targetState = !isSlotFullyCompleted;
      const nowISO = new Date().toISOString();
      (slot.students || []).forEach(s => {
        s.completed = targetState;
        if (targetState) {
          s.completedAt = nowISO;
          s.userSetTimestamp = true;
        } else {
          delete s.completedAt;
          delete s.userSetTimestamp;
        }
      });
      this.saveProjects();
      this.render();
      this.showToast(targetState ? `Marked all in ${slot.name} as paid!` : `Reset status for ${slot.name}`);
    });

    // Inline edit slot title
    const startSlotEdit = () => {
      this.editingSlotId = slot.id;
      this.render();
      setTimeout(() => {
        const input = document.querySelector(`#slot-elem-${slot.id} .slot-title-edit-input`);
        if (input) {
          input.focus();
          input.select();
          const saveTitle = () => {
            const val = input.value.trim();
            if (val) {
              slot.name = val;
              this.saveProjects();
            }
            this.editingSlotId = null;
            this.render();
          };
          input.addEventListener('keydown', (evt) => {
            if (evt.key === 'Enter') saveTitle();
            if (evt.key === 'Escape') {
              this.editingSlotId = null;
              this.render();
            }
          });
          input.addEventListener('blur', saveTitle);
        }
      }, 50);
    };

    header.querySelector('.edit-slot-btn').addEventListener('click', (e) => { e.stopPropagation(); startSlotEdit(); });
    const titleSpan = header.querySelector('.slot-title');
    if (titleSpan) titleSpan.addEventListener('dblclick', (e) => { e.stopPropagation(); startSlotEdit(); });

    // Delete slot
    header.querySelector('.delete-slot-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      project.slots = project.slots.filter(s => s.id !== slot.id);
      this.saveProjects();
      this.render();
      this.showToast(`Deleted time slot "${slot.name}"`);
    });

    slotCard.appendChild(header);

    // Students list
    const studentsList = document.createElement('div');
    studentsList.className = 'students-list';

    const displayStudents = (slot.students || []).filter(student => {
      if (!this.searchQuery) return true;
      return student.name.toLowerCase().includes(this.searchQuery) || String(student.fee).includes(this.searchQuery);
    });

    displayStudents.forEach(student => {
      const studentRow = this.createStudentRow(project, slot, student);
      studentsList.appendChild(studentRow);
    });

    slotCard.appendChild(studentsList);

    // Inline Add Student
    const addStudentWrapper = document.createElement('div');
    addStudentWrapper.className = 'inline-add-student-wrapper';

    const triggerBtn = document.createElement('button');
    triggerBtn.className = 'add-student-trigger-btn';
    triggerBtn.innerHTML = `
      <span class="add-plus-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </span>
      <span>Add student</span>
    `;

    const inlineForm = document.createElement('form');
    inlineForm.className = 'inline-form hidden';
    inlineForm.innerHTML = `
      <div class="form-inputs-row">
        <input type="text" placeholder="Name (or Name - Fee, e.g. Aravind - 4000)" class="todoist-input student-name-input" required autocomplete="off">
        <input type="number" placeholder="Fee (₹)" class="todoist-input-sm student-fee-input" min="0">
      </div>
      <div class="form-actions">
        <button type="submit" class="todoist-btn primary-btn">Add student</button>
        <button type="button" class="todoist-btn cancel-btn">Cancel</button>
      </div>
    `;

    const nameInput = inlineForm.querySelector('.student-name-input');
    const feeInput = inlineForm.querySelector('.student-fee-input');
    const cancelBtn = inlineForm.querySelector('.cancel-btn');

    nameInput.addEventListener('input', () => {
      const parsed = parseNameAndFee(nameInput.value);
      if (parsed.fee > 0 && !feeInput.value) {
        feeInput.value = parsed.fee;
      }
    });

    triggerBtn.addEventListener('click', () => {
      triggerBtn.style.display = 'none';
      inlineForm.classList.remove('hidden');
      nameInput.focus();
    });

    cancelBtn.addEventListener('click', () => {
      inlineForm.classList.add('hidden');
      triggerBtn.style.display = 'flex';
      nameInput.value = '';
      feeInput.value = '';
    });

    inlineForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawName = nameInput.value.trim();
      let explicitFee = parseFloat(feeInput.value);
      
      const parsed = parseNameAndFee(rawName, explicitFee || 0);
      const sName = parsed.name || rawName;
      const sFee = !isNaN(explicitFee) ? explicitFee : (parsed.fee || 0);

      if (!sName) return;

      const newStudent = {
        id: 's-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        name: sName,
        fee: sFee,
        completed: false
      };

      if (!slot.students) slot.students = [];
      slot.students.push(newStudent);
      this.saveProjects();
      this.render();

      setTimeout(() => {
        const updatedSlotElem = document.getElementById(`slot-elem-${slot.id}`);
        if (updatedSlotElem) {
          const newTrigger = updatedSlotElem.querySelector('.add-student-trigger-btn');
          const newForm = updatedSlotElem.querySelector('.inline-form');
          const newNameInp = updatedSlotElem.querySelector('.student-name-input');
          if (newTrigger && newForm && newNameInp) {
            newTrigger.style.display = 'none';
            newForm.classList.remove('hidden');
            newNameInp.focus();
          }
        }
      }, 50);

      this.showToast(`Added ${sName} (${this.formatCurrency(sFee)})`);
    });

    addStudentWrapper.appendChild(triggerBtn);
    addStudentWrapper.appendChild(inlineForm);
    slotCard.appendChild(addStudentWrapper);

    return slotCard;
  }

  createStudentRow(project, slot, student) {
    if (this.editingStudentId === student.id) {
      const editFormWrapper = document.createElement('form');
      editFormWrapper.className = 'student-edit-form';
      editFormWrapper.innerHTML = `
        <div class="student-edit-inputs">
          <input type="text" class="todoist-input edit-name-val" value="${escapeHTML(student.name)}" placeholder="Student Name" required autofocus>
          <input type="number" class="todoist-input-sm edit-fee-val" value="${student.fee}" placeholder="Fee (₹)" min="0" required>
        </div>
        <div class="form-actions">
          <button type="submit" class="todoist-btn primary-btn">Save</button>
          <button type="button" class="todoist-btn cancel-btn edit-cancel-btn">Cancel</button>
        </div>
      `;

      const editNameInp = editFormWrapper.querySelector('.edit-name-val');
      const editFeeInp = editFormWrapper.querySelector('.edit-fee-val');
      const cancelBtn = editFormWrapper.querySelector('.edit-cancel-btn');

      editNameInp.addEventListener('input', () => {
        const parsed = parseNameAndFee(editNameInp.value);
        if (parsed.fee > 0) {
          editFeeInp.value = parsed.fee;
        }
      });

      editFormWrapper.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawName = editNameInp.value.trim();
        const rawFee = parseFloat(editFeeInp.value);

        const parsed = parseNameAndFee(rawName, rawFee || 0);
        student.name = parsed.name || rawName;
        student.fee = !isNaN(rawFee) ? rawFee : (parsed.fee || 0);

        this.editingStudentId = null;
        this.saveProjects();
        this.render();
        this.showToast(`Updated ${student.name}`);
      });

      editNameInp.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.editingStudentId = null;
          this.render();
        }
      });

      cancelBtn.addEventListener('click', () => {
        this.editingStudentId = null;
        this.render();
      });

      return editFormWrapper;
    }

    const row = document.createElement('div');
    row.className = `student-row ${student.completed ? 'completed' : ''}`;
    row.id = `student-row-${student.id}`;

    row.innerHTML = `
      <div class="student-row-left">
        <button class="todoist-checkbox" title="${student.completed ? 'Mark incomplete' : 'Mark completed'}" aria-label="Toggle completed">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
        <div class="student-details" title="Click to edit inline">
          <span class="student-name">${escapeHTML(student.name)}</span>
          <span class="student-fee">— ${escapeHTML(String(student.fee))}</span>
        </div>
      </div>

      <div class="student-row-actions">
        <button class="icon-btn edit-student-btn" title="Edit student inline" aria-label="Edit student">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button class="icon-btn danger delete-student-btn" title="Delete student" aria-label="Delete student">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    row.querySelector('.todoist-checkbox').addEventListener('click', (e) => {
      e.stopPropagation();
      student.completed = !student.completed;
      if (student.completed) {
        student.completedAt = new Date().toISOString();
        student.userSetTimestamp = true;
      } else {
        delete student.completedAt;
        delete student.userSetTimestamp;
      }
      this.saveProjects();
      this.render();
      if (student.completed) {
        this.showToast(`Paid: ${student.name} (${this.formatCurrency(student.fee)})`);
      }
    });

    const startEdit = (e) => {
      e.stopPropagation();
      this.editingStudentId = student.id;
      this.render();
      setTimeout(() => {
        const inp = document.querySelector('.student-edit-form .edit-name-val');
        if (inp) {
          inp.focus();
          inp.select();
        }
      }, 50);
    };

    row.querySelector('.student-details').addEventListener('click', startEdit);
    row.querySelector('.edit-student-btn').addEventListener('click', startEdit);

    row.querySelector('.delete-student-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      slot.students = slot.students.filter(s => s.id !== student.id);
      this.saveProjects();
      this.render();
      this.showToast(`Removed ${student.name}`);
    });

    return row;
  }

  // ==========================================================================
  // Job Application Tracker Logic & OCR Auto-Fill
  // ==========================================================================
  setupJobEventListeners() {
    if (this.toggleSmartAddBtn) {
      this.toggleSmartAddBtn.addEventListener('click', () => {
        this.openAddJobForm();
      });
    }

    if (this.closeSmartAddBtn) {
      this.closeSmartAddBtn.addEventListener('click', () => {
        this.closeAddJobForm();
      });
    }

    if (this.cancelJobBtn) {
      this.cancelJobBtn.addEventListener('click', () => {
        this.closeAddJobForm();
      });
    }

    if (this.smartDropZone) {
      this.smartDropZone.addEventListener('click', () => {
        if (this.jobImageFileInput) this.jobImageFileInput.click();
      });

      this.smartDropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.smartDropZone.classList.add('dragover');
      });

      this.smartDropZone.addEventListener('dragleave', () => {
        this.smartDropZone.classList.remove('dragover');
      });

      this.smartDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        this.smartDropZone.classList.remove('dragover');
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          const file = e.dataTransfer.files[0];
          if (file.type.startsWith('image/')) {
            this.processImageOCR(file);
          } else {
            this.showToast('Please drop an image (PNG, JPG or screenshot)');
          }
        }
      });
    }

    if (this.jobImageFileInput) {
      this.jobImageFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.processImageOCR(e.target.files[0]);
        }
      });
    }

    // Global Cmd+V / Ctrl+V paste support for screenshots
    document.addEventListener('paste', (e) => {
      if (this.currentView !== 'jobs') return;
      const clipboardData = e.clipboardData || window.clipboardData;
      if (!clipboardData || !clipboardData.items) return;

      for (let i = 0; i < clipboardData.items.length; i++) {
        const item = clipboardData.items[i];
        if (item.type.indexOf('image') !== -1) {
          const blob = item.getAsFile();
          if (blob) {
            e.preventDefault();
            this.openAddJobForm();
            this.processImageOCR(blob);
            return;
          }
        }
      }
    });

    if (this.parseTextBtn) {
      this.parseTextBtn.addEventListener('click', () => {
        const text = this.smartTextInput ? this.smartTextInput.value.trim() : '';
        if (!text) {
          this.showToast('Please paste job text or link first');
          return;
        }
        this.parseJobText(text);
        this.showToast('Extracted job details!');
      });
    }

    if (this.jobStatusTabs) {
      const tabs = this.jobStatusTabs.querySelectorAll('.job-filter-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.jobFilter = tab.getAttribute('data-status') || 'all';
          this.renderJobCards();
        });
      });
    }

    if (this.jobForm) {
      this.jobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = this.jobRoleInput ? this.jobRoleInput.value.trim() : '';
        const company = this.jobCompanyInput ? this.jobCompanyInput.value.trim() : '';
        const location = this.jobLocationInput ? this.jobLocationInput.value.trim() : '';
        const salary = this.jobSalaryInput ? this.jobSalaryInput.value.trim() : '';
        const link = this.jobLinkInput ? this.jobLinkInput.value.trim() : '';
        const status = this.jobStatusSelect ? this.jobStatusSelect.value : 'applied';
        const notes = this.jobNotesInput ? this.jobNotesInput.value.trim() : '';

        if (!role || !company) {
          this.showToast('Please enter both Role and Company name');
          return;
        }

        const newJob = {
          id: 'job-' + Date.now(),
          role,
          company,
          location,
          salary,
          link,
          status,
          notes,
          appliedAt: new Date().toISOString()
        };

        this.jobs.unshift(newJob);
        this.saveJobs();
        this.closeAddJobForm();
        this.renderJobsView();
        this.showToast(`Saved application for ${company}`);
      });
    }
  }

  openAddJobForm() {
    if (this.smartAddCard) {
      this.smartAddCard.classList.remove('hidden');
      this.smartAddCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (this.jobRoleInput) this.jobRoleInput.focus();
    }
  }

  closeAddJobForm() {
    if (this.smartAddCard) {
      this.smartAddCard.classList.add('hidden');
      if (this.jobForm) this.jobForm.reset();
      if (this.smartTextInput) this.smartTextInput.value = '';
    }
  }

  parseJobText(rawText) {
    if (!rawText) return;
    const text = rawText.trim();

    // 1. Extract URL
    const urlMatch = text.match(/https?:\/\/[^\s]+/i);
    if (urlMatch && this.jobLinkInput) {
      this.jobLinkInput.value = urlMatch[0];
    }

    // 2. Extract Salary / CTC (e.g. ₹24-28 LPA, 20 LPA, $120k-$150k, 15-20 Lakhs)
    const salaryMatch = text.match(/(?:(?:₹|INR|Rs\.?)\s*\d+(?:[.,]\d+)?(?:\s*[-–to]+\s*(?:₹|INR|Rs\.?)?\d+(?:[.,]\d+)?)?\s*(?:LPA|lpa|Lakhs?|lac|k|K)?)|(?:\$\s*\d+k?(?:\s*[-–to]+\s*\$?\d+k?)?)|(?:\d+(?:[.,]\d+)?\s*[-–to]+\s*\d+(?:[.,]\d+)?\s*(?:LPA|lpa|Lakhs?|lac))/i);
    if (salaryMatch && this.jobSalaryInput) {
      this.jobSalaryInput.value = salaryMatch[0].trim();
    }

    // 3. Extract Location & Mode (e.g. Bangalore, Hybrid, Remote, etc.)
    const modeMatch = text.match(/\b(Remote|Hybrid|On-?site|In-office)\b/i);
    const cityMatch = text.match(/\b(Bangalore|Bengaluru|Mumbai|Delhi|NCR|Gurgaon|Gurugram|Noida|Hyderabad|Pune|Chennai|Kolkata|Ahmedabad|San Francisco|New York|London|Singapore|Berlin|Toronto)\b/i);
    let loc = '';
    if (cityMatch && modeMatch) {
      loc = `${cityMatch[0]} (${modeMatch[0]})`;
    } else if (cityMatch) {
      loc = cityMatch[0];
    } else if (modeMatch) {
      loc = modeMatch[0];
    }
    if (loc && this.jobLocationInput) {
      this.jobLocationInput.value = loc;
    }

    // 4. Extract Role / Job Title
    const rolePattern = /(?:(?:Senior|Sr\.?|Lead|Principal|Junior|Jr\.?|Staff|Associate|Chief|Head of)?\s*(?:Product|UI\/UX|UX\/UI|Visual|Interaction|Graphic|Brand)?\s*(?:Designer|Developer|Engineer|Architect|Manager|Analyst|Consultant)|(?:Frontend|Backend|Full\s*Stack|Mobile|iOS|Android|DevOps|Data|QA|Software)\s*(?:Engineer|Developer|Lead|Intern))/i;
    const roleMatch = text.match(rolePattern);
    if (roleMatch && this.jobRoleInput) {
      this.jobRoleInput.value = roleMatch[0].trim();
    }

    // 5. Extract Company
    const companyPrefixMatch = text.match(/(?:at|@|company:\s*|hiring at\s*)([A-Z][A-Za-z0-9&.\s]{1,30})(?:\s+in|\s+is|\s+for|[,\n.]|$)/i);
    if (companyPrefixMatch && this.jobCompanyInput) {
      this.jobCompanyInput.value = companyPrefixMatch[1].trim();
    } else if (urlMatch && this.jobCompanyInput && !this.jobCompanyInput.value) {
      try {
        const parsedUrl = new URL(urlMatch[0]);
        const hostParts = parsedUrl.hostname.split('.');
        const mainPart = hostParts.find(p => !['www', 'careers', 'jobs', 'lever', 'greenhouse', 'workday', 'com', 'co', 'in', 'org', 'io', 'net'].includes(p.toLowerCase()));
        if (mainPart) {
          this.jobCompanyInput.value = mainPart.charAt(0).toUpperCase() + mainPart.slice(1);
        }
      } catch (e) {}
    }
  }

  async processImageOCR(imageFileOrBlob) {
    if (!imageFileOrBlob) return;
    if (typeof Tesseract === 'undefined') {
      this.showToast('OCR engine loading, please try again in a moment...');
      return;
    }

    if (this.ocrStatusOverlay) {
      this.ocrStatusOverlay.classList.remove('hidden');
      if (this.ocrStatusText) this.ocrStatusText.textContent = 'Scanning screenshot with OCR...';
    }

    try {
      const worker = await Tesseract.recognize(imageFileOrBlob, 'eng', {
        logger: m => {
          if (m && m.status === 'recognizing text' && m.progress && this.ocrStatusText) {
            const pct = Math.round(m.progress * 100);
            this.ocrStatusText.textContent = `Scanning screenshot: ${pct}%`;
          }
        }
      });

      const recognizedText = (worker && worker.data && worker.data.text) ? worker.data.text : '';
      if (this.smartTextInput) this.smartTextInput.value = recognizedText;
      this.parseJobText(recognizedText);
      this.showToast('Auto-filled job details from screenshot');
    } catch (err) {
      console.error('OCR Error:', err);
      this.showToast('Could not extract text. Please paste description or link.');
    } finally {
      if (this.ocrStatusOverlay) this.ocrStatusOverlay.classList.add('hidden');
    }
  }

  renderJobsView() {
    this.dashboardView.classList.add('hidden');
    this.analyticsView.classList.add('hidden');
    this.slotsContainer.classList.add('hidden');
    this.quickTasksContainer.classList.add('hidden');
    this.addSlotSection.classList.add('hidden');
    this.jobsView.classList.remove('hidden');

    this.mainViewTitle.textContent = 'Job Application Tracker';
    this.topHeaderRightActions.classList.add('hidden');
    this.sidebarEarningsCard.style.display = 'none';

    // Calculate Pipeline Metrics
    const totalApplied = this.jobs.filter(j => j.status !== 'wishlist').length;
    const interviewing = this.jobs.filter(j => j.status === 'interviewing').length;
    const offers = this.jobs.filter(j => j.status === 'offered').length;
    const activePipeline = interviewing + offers;
    const responseRate = totalApplied > 0 ? Math.round((activePipeline / totalApplied) * 100) : 0;

    if (this.jobStatApplied) this.jobStatApplied.textContent = totalApplied;
    if (this.jobStatInterviewing) this.jobStatInterviewing.textContent = interviewing;
    if (this.jobStatOffers) this.jobStatOffers.textContent = offers;
    if (this.jobStatResponseRate) this.jobStatResponseRate.textContent = `${responseRate}%`;

    // Update Tab Counts
    const countAll = this.jobs.length;
    const countWishlist = this.jobs.filter(j => j.status === 'wishlist').length;
    const countApplied = this.jobs.filter(j => j.status === 'applied').length;
    const countInterviewing = this.jobs.filter(j => j.status === 'interviewing').length;
    const countOffered = this.jobs.filter(j => j.status === 'offered').length;
    const countRejected = this.jobs.filter(j => j.status === 'rejected').length;

    const elAll = document.getElementById('countAll');
    const elWishlist = document.getElementById('countWishlist');
    const elApplied = document.getElementById('countApplied');
    const elInterviewing = document.getElementById('countInterviewing');
    const elOffered = document.getElementById('countOffered');
    const elRejected = document.getElementById('countRejected');

    if (elAll) elAll.textContent = countAll;
    if (elWishlist) elWishlist.textContent = countWishlist;
    if (elApplied) elApplied.textContent = countApplied;
    if (elInterviewing) elInterviewing.textContent = countInterviewing;
    if (elOffered) elOffered.textContent = countOffered;
    if (elRejected) elRejected.textContent = countRejected;

    this.renderJobCards();
  }

  renderJobCards() {
    if (!this.jobCardsGrid) return;
    this.jobCardsGrid.innerHTML = '';

    let filtered = this.jobs;
    if (this.jobFilter !== 'all') {
      filtered = filtered.filter(j => j.status === this.jobFilter);
    }

    if (this.searchQuery) {
      filtered = filtered.filter(j => 
        (j.role && j.role.toLowerCase().includes(this.searchQuery)) ||
        (j.company && j.company.toLowerCase().includes(this.searchQuery)) ||
        (j.location && j.location.toLowerCase().includes(this.searchQuery)) ||
        (j.notes && j.notes.toLowerCase().includes(this.searchQuery))
      );
    }

    if (filtered.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'empty-state';
      emptyDiv.style.gridColumn = '1 / -1';
      emptyDiv.innerHTML = `
        <div class="empty-state-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
        <div class="empty-state-title">No job applications in this view</div>
        <p style="font-size: 13.5px; color: var(--text-muted); margin-top: 4px;">Click "Add Application" or press <kbd>Cmd+V</kbd> to paste a job screenshot.</p>
      `;
      this.jobCardsGrid.appendChild(emptyDiv);
      return;
    }

    filtered.forEach(job => {
      const card = document.createElement('div');
      card.className = 'job-card';

      const dateObj = job.appliedAt ? new Date(job.appliedAt) : new Date();
      const dateFormatted = dateObj.toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric'
      });

      card.innerHTML = `
        <div>
          <div class="job-card-header">
            <div class="job-card-header-left">
              <div class="job-company-avatar" style="background-color: ${this.getCompanyColor(job.company)};">
                ${escapeHTML((job.company || 'J').charAt(0).toUpperCase())}
              </div>
              <div>
                <div class="job-card-role">${escapeHTML(job.role)}</div>
                <div class="job-card-company">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <span>${escapeHTML(job.company)}</span>
                </div>
              </div>
            </div>
            <span class="job-status-badge badge-${job.status}">${this.formatJobStatusBadge(job.status)}</span>
          </div>

          <div class="job-meta-row" style="margin-top: 10px;">
            ${job.location ? `
              <div class="job-meta-pill" title="Location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${escapeHTML(job.location)}</span>
              </div>
            ` : ''}
            ${job.salary ? `
              <div class="job-meta-pill salary" title="Salary / CTC">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span>${escapeHTML(job.salary)}</span>
              </div>
            ` : ''}
            ${job.link ? `
              <div class="job-meta-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <a href="${escapeHTML(job.link)}" target="_blank" rel="noopener noreferrer">View Post</a>
              </div>
            ` : ''}
          </div>

          ${job.notes ? `
            <div class="job-card-notes" style="margin-top: 10px;">
              <strong>Notes:</strong> ${escapeHTML(job.notes)}
            </div>
          ` : ''}
        </div>

        <div class="job-card-footer">
          <span class="job-card-date">Added ${dateFormatted}</span>
          <div class="job-actions-wrap">
            <select class="job-status-quick-select" aria-label="Update status">
              <option value="wishlist" ${job.status === 'wishlist' ? 'selected' : ''}>Wishlist</option>
              <option value="applied" ${job.status === 'applied' ? 'selected' : ''}>Applied</option>
              <option value="interviewing" ${job.status === 'interviewing' ? 'selected' : ''}>Interviewing</option>
              <option value="offered" ${job.status === 'offered' ? 'selected' : ''}>Offered</option>
              <option value="rejected" ${job.status === 'rejected' ? 'selected' : ''}>Archived</option>
            </select>
            <button class="delete-job-btn" title="Delete job application" aria-label="Delete job application">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Status Change Handler
      const statusSelect = card.querySelector('.job-status-quick-select');
      statusSelect.addEventListener('change', (e) => {
        job.status = e.target.value;
        this.saveJobs();
        this.renderJobsView();
        this.showToast(`Updated ${job.company} status to ${this.formatJobStatusBadge(job.status)}`);
      });

      // Delete Handler - Instant removal without alert box modal
      const deleteBtn = card.querySelector('.delete-job-btn');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const companyName = job.company || 'Job';
        this.jobs = this.jobs.filter(j => j.id !== job.id);
        this.saveJobs();
        this.renderJobsView();
        this.showToast(`Deleted ${companyName} application`);
      });

      this.jobCardsGrid.appendChild(card);
    });
  }

  getCompanyColor(name) {
    const colors = [
      '#dc2626', '#ea580c', '#d97706', '#059669', 
      '#0284c7', '#2563eb', '#7c3aed', '#db2777', '#475569'
    ];
    if (!name) return colors[0];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  formatJobStatusBadge(status) {
    switch (status) {
      case 'wishlist': return 'Wishlist';
      case 'applied': return 'Applied';
      case 'interviewing': return 'Interviewing';
      case 'offered': return 'Offer Received';
      case 'rejected': return 'Archived';
      default: return status;
    }
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  window.todoistApp = new TodoistMultiApp();
});
