import { useState } from 'react';
import { useSystemStore } from '../../store/systemStore';
import DesktopIcon from './DesktopIcon';
import ContextMenu from './ContextMenu';
import { Hexagon, Activity, AppWindow, ScrollText, Monitor } from 'lucide-react';

// Modules
import Finder from '../modules/Finder';
import Kernel from '../modules/Kernel';
import Apps from '../modules/Apps';
import Logs from '../modules/Logs';
import MonitorComp from '../modules/Monitor';

const initialIcons = [
    { id: 'finder', label: 'Finder', icon: Hexagon, component: Finder },
    { id: 'kernel', label: 'Kernel', icon: Activity, component: Kernel },
    { id: 'apps', label: 'Apps', icon: AppWindow, component: Apps },
    { id: 'logs', label: 'Logs', icon: ScrollText, component: Logs },
    { id: 'monitor', label: 'Monitor', icon: Monitor, component: MonitorComp },
];

export default function Desktop() {
    const { openWindow } = useSystemStore();
    const [contextMenu, setContextMenu] = useState({ x: null, y: null });

    const handleContextMenu = (e) => {
        e.preventDefault();
        setContextMenu({ x: e.pageX, y: e.pageY });
    };

    const closeContextMenu = () => setContextMenu({ x: null, y: null });

    return (
        <div
            className="absolute top-0 left-0 w-full h-full pt-10 pb-20 px-4 z-0"
            onContextMenu={handleContextMenu}
            onClick={closeContextMenu}
        >
            <div className="flex flex-col flex-wrap content-start h-full gap-2 w-fit">
                {initialIcons.map((icon) => (
                    <DesktopIcon
                        key={icon.id}
                        {...icon}
                        onDoubleClick={() => openWindow(icon.id, icon.label, icon.component)}
                    />
                ))}
            </div>

            {contextMenu.x !== null && (
                <ContextMenu x={contextMenu.x} y={contextMenu.y} closeMenu={closeContextMenu} />
            )}
        </div>
    );
}
