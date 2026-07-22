import { create } from 'zustand';

export const useSystemStore = create((set, get) => ({
    windows: [],
    activeWindowId: null,
    nextZIndex: 1,
    dockVisible: true,
    wallpaper: 'mountains',

    openWindow: (id, title, component, defaultSize = { width: 600, height: 400 }) => {
        const { windows, nextZIndex } = get();

        // If window already exists, just focus it
        if (windows.find((w) => w.id === id)) {
            get().focusWindow(id);
            return;
        }

        const viewport = typeof window === 'undefined' ? null : window;
        const width = viewport ? Math.min(defaultSize.width, Math.max(320, viewport.innerWidth - 32)) : defaultSize.width;
        const height = viewport ? Math.min(defaultSize.height, Math.max(240, viewport.innerHeight - 120)) : defaultSize.height;
        const position = {
            x: viewport ? Math.min(100 + windows.length * 30, Math.max(16, viewport.innerWidth - width - 16)) : 100 + windows.length * 30,
            y: viewport ? Math.min(100 + windows.length * 30, Math.max(48, viewport.innerHeight - height - 72)) : 100 + windows.length * 30,
        };

        const newWindow = {
            id,
            title,
            component,
            minimized: false,
            size: { width, height },
            zIndex: nextZIndex,
            snap: null,
            position,
        };

        set((state) => ({
            windows: [...state.windows, newWindow],
            activeWindowId: id,
            nextZIndex: nextZIndex + 1,
        }));
    },

    closeWindow: (id) => {
        set((state) => {
            const windows = state.windows.filter((w) => w.id !== id);
            if (state.activeWindowId !== id) return { windows };

            const nextActive = windows
                .filter((w) => !w.minimized)
                .sort((a, b) => b.zIndex - a.zIndex)[0]?.id ?? null;

            return { windows, activeWindowId: nextActive };
        });
    },

    minimizeWindow: (id) => {
        set((state) => ({
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, minimized: true } : w
            ),
            activeWindowId: id === state.activeWindowId ? null : state.activeWindowId,
        }));
    },

    toggleMaximize: (id) => {
        set((state) => ({
            windows: state.windows.map((w) => {
                if (w.id !== id) return w;
                return {
                    ...w,
                    snap: w.snap === 'maximized' ? null : 'maximized',
                };
            }),
        }));
        get().focusWindow(id);
    },

    restoreWindow: (id) => {
        set((state) => ({
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, snap: null } : w
            ),
        }));
        get().focusWindow(id);
    },

    focusWindow: (id) => {
        const { nextZIndex } = get();
        set((state) => ({
            activeWindowId: id,
            nextZIndex: nextZIndex + 1,
            // Also un-minimize if focused
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, minimized: false, zIndex: nextZIndex } : w
            ),
        }));
    },

    updateWindowPosition: (id, position) => {
        set((state) => ({
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, position } : w
            ),
        }));
    },

    updateWindowSize: (id, size) => {
        set((state) => ({
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, size } : w
            ),
        }));
    },

    snapWindow: (id, snap) => {
        set((state) => ({
            windows: state.windows.map((window) =>
                window.id === id ? { ...window, snap, minimized: false } : window
            ),
        }));
        get().focusWindow(id);
    },

    clearSnap: (id) => {
        set((state) => ({
            windows: state.windows.map((window) =>
                window.id === id ? { ...window, snap: null } : window
            ),
        }));
    },

    releaseSnap: (id, position, size) => {
        set((state) => ({
            windows: state.windows.map((window) =>
                window.id === id ? { ...window, snap: null, position, size } : window
            ),
        }));
    },

    toggleDock: () => set((state) => ({ dockVisible: !state.dockVisible })),
    setWallpaper: (wallpaper) => set({ wallpaper }),
    resetWindows: () => set({ windows: [], activeWindowId: null, nextZIndex: 1 }),
}));
