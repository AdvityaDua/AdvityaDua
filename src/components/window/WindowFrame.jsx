import { Rnd } from 'react-rnd';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useSystemStore } from '../../store/systemStore';
import { motion } from 'framer-motion';

export default function WindowFrame({ window }) {
    const { closeWindow, minimizeWindow, toggleMaximize, focusWindow, updateWindowPosition, updateWindowSize } = useSystemStore();
    const { id, title, position, size, zIndex, minimized, component: Content } = window;
    const isMaximized = window.maximized;
    if (minimized) return null;

    return (
        <Rnd
            default={{
                x: position.x,
                y: position.y,
                width: size.width,
                height: size.height,
            }}
            position={isMaximized ? { x: 0, y: 32 } : position}
            size={isMaximized ? { width: '100%', height: '' } : size}
            minWidth={300}
            minHeight={200}
            bounds={isMaximized ? false : "parent"}
            disableDragging={isMaximized}
            enableResizing={!isMaximized}
            onDragStop={(e, d) => !isMaximized && updateWindowPosition(id, { x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) => {
                if (!isMaximized) {
                    updateWindowSize(id, { width: ref.style.width, height: ref.style.height });
                    updateWindowPosition(id, position);
                }
            }}
            onMouseDown={() => focusWindow(id)}
            style={{ zIndex, display: 'flex' }}
            dragHandleClassName="window-header"
            className={`flex flex-col bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden pointer-events-auto ${isMaximized ? '!rounded-none border-0 !h-[calc(100vh-112px)]' : ''}`}
        >
            {/* Window Header */}
            <div
                className="window-header h-10 flex items-center justify-between px-4 bg-white/40 border-b border-white/10 cursor-default"
                onDoubleClick={() => toggleMaximize(id)}
            >
                <div className="flex gap-2 group">
                    <button
                        onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                        className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                        <X className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                        className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
                    >
                        <Minus className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}
                        className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                        <Maximize2 className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
                    </button>
                </div>

                <span className="text-sm font-medium text-black/70 dark:text-white/70 pointer-events-none select-none">
                    {title}
                </span>

                <div className="w-14" /> {/* Spacer for centering title */}
            </div>

            {/* Window Content - Removed overflow-auto to let child handle it */}
            <div className="flex-1 overflow-hidden bg-white/50 p-0 relative">
                <div className="absolute inset-0 overflow-auto">
                    <Content />
                </div>
            </div>
        </Rnd>
    );
}
