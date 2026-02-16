import { useRef, useState } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useSystemStore } from '../../store/systemStore';

export default function DockItem({ mouseX, icon: Icon, label, windowId, component }) {
    const ref = useRef(null);
    const [isHovered, setHovered] = useState(false);
    const { openWindow, windows } = useSystemStore();

    const isOpen = windows.some(w => w.id === windowId);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <div className="relative flex flex-col items-center">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: -20 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs text-white border border-white/10 whitespace-nowrap"
                    >
                        {label}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                ref={ref}
                style={{ width }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square w-10 flex items-center justify-center mb-1 mx-1 rounded-xl bg-white/10 border border-white/10 shadow-md backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => openWindow(windowId, label, component)}
                whileTap={{ scale: 0.85 }}
            >
                <Icon className="text-white w-3/5 h-3/5" />
            </motion.div>

            <div className={`w-1 h-1 rounded-full bg-white mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
        </div>
    );
}
