/**
 * Todoist Style Time Slots & Student Fee Tracker Application
 * Clean single-page application with dynamic remaining potential calculation
 */

// All 10 Time Slots & 57 Students Seed Dataset
const DEFAULT_SAMPLE_DATA = [
  {
    id: 'slot-1',
    name: '8-9AM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-1-1', name: 'Abinaya', fee: 9600, completed: false },
      { id: 's-1-2', name: 'Nikhel Kesani', fee: 4900, completed: true }
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
      { id: 's-5-17', name: 'Krithi', fee: 8100, completed: true }
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

/**
 * Smart string parser: Extracts name and numeric fee if typed like "Aravind - 4000" or "Aravind — 4000"
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

class TodoistApp {
  constructor() {
    this.slots = this.loadSlots();
    this.searchQuery = '';
    this.allCollapsed = false;
    this.editingStudentId = null;
    this.editingSlotId = null;

    // DOM Elements
    this.slotsContainer = document.getElementById('slotsContainer');
    this.sidebar = document.getElementById('sidebar');
    this.sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
    this.quickAddSlotBtn = document.getElementById('quickAddSlotBtn');
    this.showAddSlotFormBtn = document.getElementById('showAddSlotFormBtn');
    this.inlineAddSlotForm = document.getElementById('inlineAddSlotForm');
    this.cancelAddSlotBtn = document.getElementById('cancelAddSlotBtn');
    this.newSlotNameInput = document.getElementById('newSlotNameInput');
    this.newSlotDateInput = document.getElementById('newSlotDateInput');
    this.sidebarSearchInput = document.getElementById('sidebarSearchInput');
    this.toggleAllSlotsBtn = document.getElementById('toggleAllSlotsBtn');
    this.toggleAllSlotsText = document.getElementById('toggleAllSlotsText');
    this.toastContainer = document.getElementById('toastContainer');

    this.init();
  }

  formatCurrency(amount) {
    const num = Number(amount) || 0;
    return `₹${num.toLocaleString('en-IN')}`;
  }

  loadSlots() {
    try {
      // Check for previously saved multi-project data or single slot data
      const savedProjects = localStorage.getItem('todoist_projects_data');
      if (savedProjects) {
        try {
          const parsedProj = JSON.parse(savedProjects);
          if (Array.isArray(parsedProj) && parsedProj[0] && Array.isArray(parsedProj[0].slots)) {
            const slots = parsedProj[0].slots;
            this.ensureNikhelFee(slots);
            return slots;
          }
        } catch (e) {}
      }

      const saved = localStorage.getItem('todoist_time_slots');
      if (saved) {
        const slots = JSON.parse(saved);
        if (Array.isArray(slots) && slots.length > 0) {
          this.ensureNikhelFee(slots);
          return slots;
        }
      }
    } catch (e) {
      console.error('Failed to load slots from localStorage', e);
    }
    const defaultData = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_DATA));
    this.ensureNikhelFee(defaultData);
    return defaultData;
  }

  ensureNikhelFee(slots) {
    slots.forEach(slot => {
      if (slot.students) {
        slot.students.forEach(s => {
          if (s.name && s.name.toLowerCase().includes('nikhel') && (s.fee === 2200 || !s.fee)) {
            s.fee = 4900;
          }
        });
      }
    });
  }

  saveSlots() {
    try {
      localStorage.setItem('todoist_time_slots', JSON.stringify(this.slots));
    } catch (e) {
      console.error('Failed to save slots to localStorage', e);
    }
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Mobile sidebar toggle
    if (this.sidebarOpenBtn) {
      this.sidebarOpenBtn.addEventListener('click', () => {
        this.sidebar.classList.add('open');
      });
    }

    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 840 && this.sidebar.classList.contains('open')) {
        if (!this.sidebar.contains(e.target) && !this.sidebarOpenBtn.contains(e.target)) {
          this.sidebar.classList.remove('open');
        }
      }
    });

    // Add Slot Handlers
    const openAddSlotForm = () => {
      this.inlineAddSlotForm.classList.remove('hidden');
      this.showAddSlotFormBtn.style.display = 'none';
      this.newSlotNameInput.focus();
      this.inlineAddSlotForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    if (this.quickAddSlotBtn) this.quickAddSlotBtn.addEventListener('click', openAddSlotForm);
    if (this.showAddSlotFormBtn) this.showAddSlotFormBtn.addEventListener('click', openAddSlotForm);

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

        this.slots.push(newSlot);
        this.saveSlots();
        this.render();

        this.newSlotNameInput.value = '';
        this.inlineAddSlotForm.classList.add('hidden');
        this.showAddSlotFormBtn.style.display = 'flex';
        this.showToast(`Time slot "${name}" added!`);
      });
    }

    // Search filter
    if (this.sidebarSearchInput) {
      this.sidebarSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    // Toggle Collapse / Expand All
    if (this.toggleAllSlotsBtn) {
      this.toggleAllSlotsBtn.addEventListener('click', () => {
        this.allCollapsed = !this.allCollapsed;
        this.slots.forEach(slot => {
          slot.collapsed = this.allCollapsed;
        });
        if (this.toggleAllSlotsText) {
          this.toggleAllSlotsText.textContent = this.allCollapsed ? 'Expand all' : 'Collapse all';
        }
        this.saveSlots();
        this.render();
      });
    }
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

  calculateStats() {
    let totalGross = 0;
    let totalEarned = 0;
    let potentialRemaining = 0;
    let totalStudents = 0;
    let completedStudents = 0;

    this.slots.forEach(slot => {
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
      totalGross,
      totalEarned,
      potentialRemaining,
      percentage,
      totalStudents,
      completedStudents,
      pendingStudents: totalStudents - completedStudents
    };
  }

  updateDashboardUI(stats) {
    // Header Stats: Potential shows remaining uncollected fees (reduces as items are checked)
    const headerPotential = document.getElementById('headerTotalPotential');
    const headerEarned = document.getElementById('headerTotalEarned');
    if (headerPotential) headerPotential.textContent = this.formatCurrency(stats.potentialRemaining);
    if (headerEarned) headerEarned.textContent = this.formatCurrency(stats.totalEarned);

    // Sidebar Stats
    const sidebarEarned = document.getElementById('sidebarTotalEarned');
    const sidebarPotential = document.getElementById('sidebarTotalPotential');
    const percentBadge = document.getElementById('earningsPercentage');
    const progressFill = document.getElementById('sidebarProgressFill');

    if (sidebarEarned) sidebarEarned.textContent = this.formatCurrency(stats.totalEarned);
    if (sidebarPotential) sidebarPotential.textContent = this.formatCurrency(stats.potentialRemaining);
    if (percentBadge) percentBadge.textContent = `${stats.percentage}%`;
    if (progressFill) progressFill.style.width = `${stats.percentage}%`;
  }

  render() {
    const stats = this.calculateStats();
    this.updateDashboardUI(stats);

    if (!this.slotsContainer) return;
    this.slotsContainer.innerHTML = '';

    // Filter slots based on search
    const filteredSlots = this.slots.filter(slot => {
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
          <p>Try searching for something else or click "+ Add time slot" below.</p>
        </div>
      `;
      return;
    }

    filteredSlots.forEach(slot => {
      const slotElement = this.createSlotElement(slot);
      this.slotsContainer.appendChild(slotElement);
    });
  }

  createSlotElement(slot) {
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

    // Header HTML
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

    // Slot Header Collapse Toggle
    header.querySelector('.slot-header-left').addEventListener('click', (e) => {
      if (e.target.closest('.slot-circle-icon') || e.target.closest('.slot-title-edit-input')) return;
      slot.collapsed = !slot.collapsed;
      this.saveSlots();
      slotCard.classList.toggle('collapsed', slot.collapsed);
    });

    // Slot Complete-All Circle Toggle
    const slotCircle = header.querySelector('.slot-circle-icon');
    slotCircle.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetState = !isSlotFullyCompleted;
      (slot.students || []).forEach(s => s.completed = targetState);
      this.saveSlots();
      this.render();
      this.showToast(targetState ? `Marked all in ${slot.name} as paid!` : `Reset status for ${slot.name}`);
    });

    // In-Place Inline Slot Title Editing
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
              this.saveSlots();
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

    const editSlotBtn = header.querySelector('.edit-slot-btn');
    if (editSlotBtn) editSlotBtn.addEventListener('click', (e) => { e.stopPropagation(); startSlotEdit(); });

    const slotTitleSpan = header.querySelector('.slot-title');
    if (slotTitleSpan) slotTitleSpan.addEventListener('dblclick', (e) => { e.stopPropagation(); startSlotEdit(); });

    // Delete Slot Button
    header.querySelector('.delete-slot-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.slots = this.slots.filter(s => s.id !== slot.id);
      this.saveSlots();
      this.render();
      this.showToast(`Deleted time slot "${slot.name}"`);
    });

    slotCard.appendChild(header);

    // Students List
    const studentsList = document.createElement('div');
    studentsList.className = 'students-list';

    // Filter students if search query exists
    const displayStudents = (slot.students || []).filter(student => {
      if (!this.searchQuery) return true;
      return student.name.toLowerCase().includes(this.searchQuery) || String(student.fee).includes(this.searchQuery);
    });

    displayStudents.forEach(student => {
      const studentRow = this.createStudentRow(slot, student);
      studentsList.appendChild(studentRow);
    });

    slotCard.appendChild(studentsList);

    // Inline Add Student section
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

    // Auto-parse fee if user types "Name - 5000" in name input
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
      this.saveSlots();
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

  createStudentRow(slot, student) {
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
        this.saveSlots();
        this.render();
        this.showToast(`Updated ${student.name} (${this.formatCurrency(student.fee)})`);
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

    // Normal View Mode Row
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

    // Toggle Checkbox
    const checkbox = row.querySelector('.todoist-checkbox');
    checkbox.addEventListener('click', (e) => {
      e.stopPropagation();
      student.completed = !student.completed;
      this.saveSlots();
      this.render();
      if (student.completed) {
        this.showToast(`Paid: ${student.name} (${this.formatCurrency(student.fee)})`);
      }
    });

    // In-Place Inline Edit trigger
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

    // Delete Student
    row.querySelector('.delete-student-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      slot.students = slot.students.filter(s => s.id !== student.id);
      this.saveSlots();
      this.render();
      this.showToast(`Removed student ${student.name}`);
    });

    return row;
  }
}

// Utility: Escape HTML
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Start Application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.todoistApp = new TodoistApp();
});
