import { motion, useMotionValue } from 'framer-motion';
import { AppWindow, Hexagon, ScrollText, Activity, Monitor, Terminal } from 'lucide-react';
import DockItem from './DockItem';

import Finder from '../modules/Finder';
import Kernel from '../modules/Kernel';
import Apps from '../modules/Apps';
import Logs from '../modules/Logs';
import MonitorComp from '../modules/Monitor';

const dockItems = [
    { id: 'finder', label: 'Finder', icon: Hexagon, component: Finder },
    { id: 'kernel', label: 'Kernel', icon: Activity, component: Kernel },
    { id: 'apps', label: 'Apps', icon: AppWindow, component: Apps },
    { id: 'logs', label: 'Logs', icon: ScrollText, component: Logs },
    { id: 'monitor', label: 'Monitor', icon: Monitor, component: MonitorComp },
    { id: 'terminal', label: 'Terminal', icon: Terminal, component: () => <div className="p-4">Terminal (Coming Soon)</div> },
];

export default function Dock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-end h-16 px-4 bg-white/20 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl"
            >
                {dockItems.map((item) => (
                    <DockItem
                        key={item.id}
                        mouseX={mouseX}
                        {...item}
                        windowId={item.id}
                    />
                ))}
            </motion.div>
        </div>
    );
}
