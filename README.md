# Todoist — Time Slots & Student Fee Tracker

A single-page web app built with pure HTML5, CSS3, and modern JavaScript, styled like **Todoist** (clean typography, soft off-white surfaces, signature coral/red `#db4c3f` accent, custom circular checkboxes, and smooth completion animations) for managing time slots, student batches, and real-time fee tracking.

---

## ✨ Features

- **Todoist Aesthetic**:
  - Left navigation sidebar with user avatar, Quick Add button, search filter, and fee collection dashboard.
  - Custom circular checkboxes with hover checkmark previews, smooth completion fills, and strikethrough animations.
- **Time Slots & Batch Grouping**:
  - Organized by time slot parent entries (`8-9AM`, `9-10AM`, `10-11AM`, `11-12PM`, etc.).
  - Expand/collapse chevrons with a global **"Collapse all / Expand all"** toggle.
  - Subtask counters (`1/2 completed`), date badges (`11 Aug`), and batch subtotals (`₹2,200 / ₹11,800`).
- **Live Earnings Dashboard**:
  - **Total Potential**: Sum of all student fees across all slots.
  - **Total Earned**: Live sum of fees from checked/completed students.
  - **Pending Collection**: Remaining balance to collect.
  - Real-time animated progress bar & percentage indicator.
- **In-Place Inline Editing (No Modals / Alerts)**:
  - Click on any student row to edit Name and Fee directly in-place.
  - Smart parser: type `Name - Fee` (e.g. `Aravind - 4000`) and the fee is automatically parsed.
  - Double-click slot header to edit slot name inline.
  - Keyboard shortcuts: `Enter` to save, `Esc` to cancel.
- **Zero-Backend Persistence**:
  - All data, completion states, and currency selections persist in `localStorage`.
  - Backup & restore with **Export JSON** and **Import JSON**.
  - Currency switcher (INR `₹`, USD `$`, EUR `€`, GBP `£`).

---

## 🚀 Live Demo

- **Hosted URL**: [simonlist.netlify.app](https://simonlist.netlify.app)
- **Repository**: [github.com/santhosh-a-designer/todolist](https://github.com/santhosh-a-designer/todolist)

---

## 🛠️ Local Development

Simply open `index.html` in any web browser, or run a lightweight local server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node / npx
npx serve .
```
