# AdvityaOS v1.0 (Mac-Style Edition)
## Product Requirements Document (React + JavaScript Only)

---

# 1. Product Vision

AdvityaOS v1.0 is a Mac-inspired personal portfolio system designed to simulate a desktop operating system experience within the browser.

The interface should resemble macOS in structure and behavior while maintaining originality and avoiding direct cloning of Apple assets.

This product represents:
- A systems-thinking AI engineer
- A clean, premium desktop-like UX
- A modular, OS-inspired portfolio

---

# 2. Critical Technical Constraint

⚠️ Mandatory Rule:

The entire project must use JavaScript (JS) only.

Do NOT use:
- TypeScript (.ts or .tsx files)
- Type definitions
- Type-based tooling

All files must use:
- .js
- .jsx

State management, components, utilities, and configuration must be implemented in plain JavaScript.

---

# 3. Core Stack

Frontend Framework:
- React (JavaScript only)

Build Tool:
- Vite (preferred) OR Next.js configured strictly with JavaScript

Styling:
- TailwindCSS

Animation:
- Framer Motion

State Management:
- Zustand (JavaScript version only)

Window Management:
- react-rnd (for draggable and resizable windows)

Blog / Logs Rendering:
- MDX configured for JavaScript

Charts (Optional System Monitor):
- Recharts

No TypeScript configuration allowed.

---

# 4. Mac-Inspired Layout Requirements

The layout must resemble macOS structure:

## 4.1 Top Menu Bar

Fixed at top of screen.

Contains:
- AdvityaOS (left corner, like Apple logo placement)
- File
- Edit
- View
- Go
- Window
- Help

Right side:
- System time (dynamic)
- Status icons (minimal)

Style Requirements:
- Frosted glass / translucent background
- Subtle blur effect
- Thin bottom border

Implementation:
Use CSS backdrop-filter with Tailwind utilities.

---

## 4.2 Desktop Area

Full-screen background.

Requirements:
- High-quality nature wallpaper or minimal gradient
- Desktop icons aligned on right side (like macOS default)

Icons represent:
- Kernel
- Apps
- Processes
- Logs
- Monitor
- Network

Each icon opens a draggable window.

---

## 4.3 Dock (Bottom Bar)

Centered bottom dock.

Behavior:
- Hover magnification effect
- Click to open application window
- Bounce animation on open (subtle)

Dock Items:
- Finder (Home)
- Apps
- Logs
- Monitor
- Terminal
- Trash (optional)

Design:
- Rounded container
- Semi-transparent
- Slight blur background
- Smooth scaling animation on hover

Use Framer Motion for magnification.

---

# 5. Window System Requirements

All sections must open in draggable windows.

Each window must include:
- Title bar
- Close button (red)
- Minimize button (yellow)
- Maximize button (green)

Behavior:
- Windows stack via z-index
- Active window brought to front
- Close removes from state
- Minimize hides but keeps in memory

State Structure Example (Zustand):

{
  openWindows: [],
  activeWindowId: null,
  minimizedWindows: []
}

All implemented in JavaScript.

---

# 6. Core Modules

## 6.1 Finder (Home Screen)

Acts as introduction page.
Contains:
- Name
- Role
- Tagline
- Short description

---

## 6.2 Kernel

Displays:
- Philosophy
- Architecture thinking
- AI system design principles
- Decision framework

Structured like system documentation.

---

## 6.3 Apps

Each major project appears as an installed application.

Each project window must include:
- Problem
- Architecture
- Stack
- Metrics
- Tradeoffs

---

## 6.4 Processes

Displayed like Activity Monitor.

List active builds with status indicators:
- RUNNING
- TESTING
- OPTIMIZING

---

## 6.5 Logs

Styled like system logs.

Format:
[YYYY-MM-DD HH:MM] Description

Clicking opens full engineering article.

---

## 6.6 Monitor

System capability dashboard.

Show skills as system layers:
- Runtime
- Service Layer
- Model Engine
- Deployment Layer

Optional charts allowed.

---

## 6.7 Terminal (Optional Advanced Feature)

Overlay modal terminal.

Commands:
- help
- about
- projects
- philosophy
- contact
- clear

Simple command parser in JavaScript.

No external shell emulation required.

---

# 7. Design Guidelines

Must Feel:
- Premium
- Clean
- Structured
- System-like

Must Avoid:
- Cartoonish UI
- Overuse of neon
- Heavy 3D effects
- Laggy animations

Performance is critical.

---

# 8. Folder Structure (JavaScript Only)

/src
  /components
    /desktop
    /dock
    /window
    /modules
  /store
    systemStore.js
  /pages OR /routes
  App.jsx
  main.jsx

No .ts or .tsx files allowed.

---

# 9. Performance Requirements

- Lazy load modules
- Animate only transform and opacity
- Keep bundle minimal
- Avoid large image assets

---

# 10. Versioning

Footer or About Section:
AdvityaOS v1.0
Architecture: React + JavaScript
Status: Stable

Future releases:
- v1.1 Performance Update
- v2.0 Live AI Integration

---

# 11. Success Criteria

The final product should:

- Feel like a real desktop OS
- Reflect systems thinking
- Be recruiter friendly
- Be technically impressive
- Be built entirely in JavaScript

---

End of Document.

