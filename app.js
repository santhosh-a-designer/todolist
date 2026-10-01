/**
 * Todoist Style Multi-List Management & Projects Dashboard
 * Supports both Student Fee Batches Trackers, Quick Tasks Lists, and Weekly/Monthly Analytics
 */

// Default Sample Datasets
const DEFAULT_FEE_SLOTS = [
  {
    id: 'slot-1',
    name: '8-9AM',
    dateTag: '11 Aug',
    collapsed: false,
    students: [
      { id: 's-1-1', name: 'Abinaya', fee: 9600, completed: false },
      { id: 's-1-2', name: 'Nikhel Kesani', fee: 4900, completed: true, completedAt: new Date().toISOString() }
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
      { id: 's-5-17', name: 'Krithi', fee: 8100, completed: true, completedAt: new Date().toISOString() }
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
  { id: 't-2', text: 'Review syllabus for 11-12PM batch', completed: true, completedAt: new Date().toISOString() },
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

class TodoistMultiApp {
  constructor() {
    this.projects = this.loadProjects();
    this.activeProjectId = localStorage.getItem('todoist_active_project') || this.projects[0].id;
    this.currentView = 'project'; // 'project' | 'dashboard' | 'analytics'
    this.analyticsPeriod = 'weekly'; // 'weekly' | 'monthly' | 'all'
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
    this.totalProjectsCount = document.getElementById('totalProjectsCount');
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
    this.slotsContainer = document.getElementById('slotsContainer');
    this.quickTasksContainer = document.getElementById('quickTasksContainer');
    this.quickTasksList = document.getElementById('quickTasksList');
    this.addSlotSection = document.getElementById('addSlotSection');

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

  loadProjects() {
    try {
      const saved = localStorage.getItem('todoist_projects_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Normalize and guarantee timestamps for completed items
          parsed.forEach(p => {
            if (p.slots) {
              p.slots.forEach(slot => {
                if (slot.students) {
                  slot.students.forEach(s => {
                    if (s.name && s.name.toLowerCase().includes('nikhel') && s.fee === 2200) {
                      s.fee = 4900;
                    }
                    if (s.completed && !s.completedAt) {
                      s.completedAt = new Date().toISOString();
                    }
                  });
                }
              });
            }
            if (p.tasks) {
              p.tasks.forEach(t => {
                if (t.completed && !t.completedAt) {
                  t.completedAt = new Date().toISOString();
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
        this.currentView = 'dashboard';
        this.render();
      });
    }

    // Sidebar Analytics link
    if (this.navAnalytics) {
      this.navAnalytics.addEventListener('click', (e) => {
        e.preventDefault();
        this.currentView = 'analytics';
        this.render();
      });
    }

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
              allCompletedPayments.push({
                id: student.id,
                name: student.name,
                fee: fee,
                slotName: slot.name,
                projectName: p.name,
                completedAt: student.completedAt ? new Date(student.completedAt) : new Date(),
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
            allCompletedPayments.push({
              id: task.id,
              name: task.text,
              fee: 0,
              slotName: 'Quick Tasks',
              projectName: p.name,
              completedAt: task.completedAt ? new Date(task.completedAt) : new Date(),
              isTask: true
            });
          }
        });
      }
    });

    // Date filtering logic
    const now = new Date();
    const startOfWeek = new Date(now);
    const currentDay = now.getDay();
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    startOfWeek.setDate(now.getDate() + distanceToMonday);
    startOfWeek.setHours(0, 0, 0, 0);

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);

    let filteredItems = [];
    let periodLabel = 'This Week';
    let chartTitleText = 'Daily Collections Breakdown';

    if (this.analyticsPeriod === 'weekly') {
      periodLabel = 'This Week';
      chartTitleText = 'Daily Collections This Week';
      filteredItems = allCompletedPayments.filter(item => item.completedAt >= startOfWeek);
    } else if (this.analyticsPeriod === 'monthly') {
      periodLabel = 'This Month';
      chartTitleText = 'Weekly Collections This Month';
      filteredItems = allCompletedPayments.filter(item => item.completedAt >= startOfMonth);
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
    if (this.summaryCard1Label) this.summaryCard1Label.textContent = `Earned ${periodLabel}`;
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
        const dayStart = new Date(dayDate.setHours(0, 0, 0, 0));
        const dayEnd = new Date(dayDate.setHours(23, 59, 59, 999));

        let sum = 0;
        items.forEach(it => {
          if (it.completedAt >= dayStart && it.completedAt <= dayEnd) {
            sum += it.fee;
          }
        });

        return { label: name, amount: sum };
      });
    } else if (period === 'monthly') {
      // 4-5 Weeks
      const weekLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
      barsData = weekLabels.map((name, index) => {
        const wStart = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth(), 1 + index * 7);
        const wEnd = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth(), 7 + index * 7, 23, 59, 59);

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
        const mStart = new Date(mDate.getFullYear(), mDate.getMonth(), 1);
        const mEnd = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 0, 23, 59, 59);

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
          <div class="chart-bar" style="height: ${Math.max(percent, 5)}%;"></div>
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
        <div class="empty-state" style="padding: 24px 0;">
          <p>No completed payments or tasks recorded in this period yet.</p>
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
        hour: '2-digit',
        minute: '2-digit'
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
              <span>${timeFormatted}</span>
            </span>
          </div>
        </div>
        <div class="ledger-item-amount">${item.fee > 0 ? this.formatCurrency(item.fee) : 'Done'}</div>
      `;
      this.ledgerList.appendChild(row);
    });
  }

  renderProjectView() {
    const project = this.activeProject;
    const stats = this.calculateProjectStats(project);

    this.dashboardView.classList.add('hidden');
    this.analyticsView.classList.add('hidden');
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
        } else {
          delete task.completedAt;
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
      (slot.students || []).forEach(s => {
        s.completed = targetState;
        if (targetState) {
          s.completedAt = s.completedAt || new Date().toISOString();
        } else {
          delete s.completedAt;
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
      } else {
        delete student.completedAt;
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
