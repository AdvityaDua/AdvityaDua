# AdvityaOS UI Elevation Plan

## Intent

Turn AdvityaOS from a browser-based macOS imitation into a distinctive technical field station for exploring Advitya's work. The experience should feel precise, spatial, and authored, with the portfolio's emerald and amber signal palette carrying through the shell and applications.

## Visual System

- **Surface:** graphite and near-black layers with thin structural rules, not frosted white panels.
- **Signals:** emerald for active/available state, amber for attention and location, muted cyan for neutral system controls.
- **Type:** Inter for interface content plus compact monospace metadata for status, IDs, and locations.
- **Depth:** controlled translucent panes, subtle grain/grid overlays, no generic gradient blobs or heavy shadows.
- **Desktop:** a dark topographic field with data coordinates and a faint grid, replacing the familiar mountain-wallpaper convention.

## Implementation Steps

1. **Desktop Field**
   - Add a custom topographic raster background and a CSS coordinate grid.
   - Add a low-key station marker and session metadata to make empty desktop space feel intentional.

2. **Shell Chrome**
   - Rebuild the topbar around compact identity, workspace status, and a clear exit action.
   - Refine desktop icons into module launchers with index labels and active-state feedback.
   - Rework the dock into a dense command rail with tooltips, launch state, and a clear pinned/open split.

3. **Window Language**
   - Give windows a dark structural header, status marker, compact traffic controls, and more deliberate borders.
   - Preserve drag, resize, minimize, maximize, focus, and snap behavior.

4. **Reference Application: Finder**
   - Establish a dark inspection surface with a compact sidebar, table-like controls, useful file metadata, and stable responsive file tiles.
   - Use it as the visual reference for all Checkpoint 4 apps.

5. **Checkpoint 4 Application Rollout**
   - Rebuild Terminal, Projects, Research Lab, Monitor, Timeline, AI Assistant, Resume, Contact, and Certificates using the same shell tokens and window rhythm.

6. **Quality Pass**
   - Verify 1024px and 1440px desktop layouts, keyboard controls, contrast, motion reduction, window bounds, and performance.

## Acceptance Criteria

- The desktop reads as AdvityaOS at first glance, without relying on macOS mimicry.
- Window chrome and dock share one palette and spacing system.
- Finder works cleanly at normal, maximized, and snapped dimensions.
- No shell interaction regresses while elevating the visuals.
