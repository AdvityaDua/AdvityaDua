# AdvityaOS Implementation Tasks

## Phase 1: Setup & Core Application Structure
- [x] **Project Initialization**
    - [x] Create React/Vite project with JavaScript.
    - [x] Install dependencies: `react-rnd`, `zustand`, `framer-motion`, `lucide-react`, `date-fns`, `clsx`, `tailwind-merge`.
    - [x] Configure Tailwind CSS (Global styles, resets, custom fonts).
    - [x] Set up folder structure: `src/components/{desktop,dock,window,modules,system}`, `src/store`, `src/assets`.
- [x] **State Management (`src/store/systemStore.js`)**
    - [x] Define `windows` array (id, title, component, size, position, zIndex, isMinimized).
    - [x] Implement actions: `openWindow`, `closeWindow`, `minimizeWindow`, `restoreWindow`, `focusWindow`.
    - [ ] Add `toggleStartMenu` action (optional).
    - [ ] Add `setVolume`, `setBrightness` system controls.

## Phase 2: System Shell (The "Mac" Look)
- [x] **Top Bar (`src/components/system/TopBar.jsx`)**
    - [x] Apple Logo / Menu structure (File, Edit, View, Go, Window, Help).
    - [x] Right-aligned Control Center (WiFi, Battery, Date/Time).
    - [x] Implement `ControlCenter` dropdown.
    - [ ] Implement `Spotlight` search trigger (Command + K).
- [/] **Desktop Environment (`src/components/desktop/Desktop.jsx`)**
    - [x] Responsive background wallpaper.
    - [x] **Desktop Icons Grid (`src/components/desktop/DesktopIcon.jsx`)**:
        - [ ] Draggable icons (optional).
        - [x] Double-click to open corresponding window.
        - [ ] Selection highlight state.
    - [x] Right-click Context Menu (Change Background, New Folder).
- [/] **Dock (`src/components/dock/Dock.jsx`)**
    - [x] Glassmorphism container.
    - [x] **Dock Item (`src/components/dock/DockItem.jsx`)**:
        - [x] Magnification animation on hover (`framer-motion`).
        - [x] Tooltip on hover.
        - [x] "Active" indicator dot for open apps.
        - [ ] Bounce animation on launch.

## Phase 3: Window Management System
- [ ] **Window Frame (`src/components/window/WindowFrame.jsx`)**
    - [ ] Use `react-rnd` for drag/resize functionality.
    - [ ] **Traffic Light Controls**:
        - [ ] Red: Close window.
        - [ ] Yellow: Minimize to Dock (with genie effect if possible).
        - [ ] Green: Maximize/Restore size.
    - [ ] **Header**: Draggable area with window title.
    - [ ] **Content Area**: Scrollable container for app content.
    - [ ] **Z-Index Management**: Bring to front on click.

- [x] **Core Applications (Modules)**
- [ ] **Finder (About Me & Resume)**
    - [ ] **Sidebar**: Favorites (AirDrop, Applications, Desktop, Documents, Downloads).
    - [ ] **Main View**: File list/grid view with "Resume.pdf".
    - [ ] **Resume Integration**: PDF viewer or HTML render of resume.
- [x] **Kernel (Philosophy)**
    - [x] Text-heavy content rendering (Markdown style).
    - [x] Sections for Architecture, Principles, Decision Framework.
- [x] **Apps (Portfolio)**
    - [x] Grid view of projects.
    - [x] **Project Card**: Thumbnail, Title, Tech Stack, Links (GitHub/Live).
    - [x] Modal details for selected project.
- [x] **Logs (Blog)**
    - [x] List of "system logs" (blog posts) with timestamps.
    - [x] Detail view for reading posts.
- [x] **Monitor (Skills)**
    - [x] Visual representation of technical skills (Progress bars, Grapsh).
    - [x] "System Resources" theme (CPU = Logic, Memory = Knowledge).
- [ ] **Terminal** (Advanced)
    - [ ] Command input parsing (`help`, `ls`, `cat`, `clear`).
    - [ ] History navigation (Up/Down arrows).
    - [ ] Matrix rain effect (Easter egg).

## Phase 5: Polish & UX
- [x] **Boot Sequence**
    - [x] "Press e to boot" trigger.
    - [x] Apple-style startup logo and progress bar.
    - [x] Verbose boot log simulation.
    - [x] Login screen (optional user/guest login).
- [x] **Mobile Responsiveness**
    - [x] Hide Dock/Top Bar on very small screens?
    - [x] Adjust window defaults for mobile.
- [ ] **Sound Effects**
    - [ ] Startup chime.
    - [ ] Error sounds.
    - [ ] Empty trash sound.
