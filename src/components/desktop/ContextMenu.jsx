import { useEffect, useRef } from 'react';
import { FolderPlus, Image, RefreshCw, Smartphone } from 'lucide-react';

export default function ContextMenu({ x, y, closeMenu }) {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeMenu]);

    if (x === null || y === null) return null;

    return (
        <div
            ref={menuRef}
            style={{ top: y, left: x }}
            className="absolute w-48 bg-white/30 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl p-1 z-50 animate-in fade-in zoom-in-95 duration-100"
        >
            <div className="flex flex-col gap-1">
                <div className="px-2 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-sm text-white/90">
                    <FolderPlus className="w-4 h-4" />
                    <span>New Folder</span>
                </div>
                <div className="px-2 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-sm text-white/90">
                    <Image className="w-4 h-4" />
                    <span>Change Wallpaper</span>
                </div>
                <div className="h-px bg-white/10 my-0.5" />
                <div className="px-2 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-sm text-white/90">
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh</span>
                </div>
            </div>
        </div>
    );
}
