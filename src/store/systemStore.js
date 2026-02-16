import { create } from 'zustand';

export const useSystemStore = create((set, get) => ({
    windows: [],
    activeWindowId: null,
    zIndexes: {},
    nextZIndex: 1,

    openWindow: (id, title, component, defaultSize = { width: 600, height: 400 }) => {
        const { windows, nextZIndex } = get();

        // If window already exists, just focus it
        if (windows.find((w) => w.id === id)) {
            get().focusWindow(id);
            return;
        }

        const newWindow = {
            id,
            title,
            component,
            minimized: false,
            size: defaultSize,
            position: { x: 100 + windows.length * 30, y: 100 + windows.length * 30 }, // Cascade effect
        };

        set((state) => ({
            windows: [...state.windows, newWindow],
            activeWindowId: id,
            zIndexes: { ...state.zIndexes, [id]: nextZIndex },
            nextZIndex: nextZIndex + 1,
        }));
    },

    closeWindow: (id) => {
        set((state) => ({
            windows: state.windows.filter((w) => w.id !== id),
            activeWindowId: state.windows.length > 1 && state.activeWindowId === id
                ? state.windows[state.windows.length - 2].id // Focus previous window if active one closes
                : state.activeWindowId,
        }));
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
                    maximized: !w.maximized
                };
            }),
        }));
        get().focusWindow(id);
    },

    restoreWindow: (id) => {
        set((state) => ({
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, maximized: false } : w
            ),
        }));
        get().focusWindow(id);
    },

    focusWindow: (id) => {
        const { nextZIndex } = get();
        set((state) => ({
            activeWindowId: id,
            zIndexes: { ...state.zIndexes, [id]: nextZIndex },
            nextZIndex: nextZIndex + 1,
            // Also un-minimize if focused
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, minimized: false } : w
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
}));
