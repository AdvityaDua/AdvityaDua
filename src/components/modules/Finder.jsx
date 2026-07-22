import { useState } from 'react';
import {
    Folder, FileText, Download, HardDrive, Smartphone,
    Clock, Cloud, Star, ChevronRight, File as FileIcon
} from 'lucide-react';
import { useSystemStore } from '../../store/systemStore';
import Resume from './Resume';

const sidebarItems = [
    {
        section: 'Favorites', items: [
            { id: 'airdrop', label: 'AirDrop', icon: Smartphone },
            { id: 'recents', label: 'Recents', icon: Clock },
            { id: 'apps', label: 'Applications', icon: Star },
            { id: 'documents', label: 'Documents', icon: FileText },
            { id: 'downloads', label: 'Downloads', icon: Download },
        ]
    },
    {
        section: 'iCloud', items: [
            { id: 'icloud', label: 'iCloud Drive', icon: Cloud },
        ]
    },
    {
        section: 'Locations', items: [
            { id: 'mac', label: "Advitya's Mac", icon: HardDrive },
        ]
    },
];

const mockFiles = {
    documents: [
        { id: 'resume', label: 'Resume.pdf', type: 'pdf', size: '1.2 MB' },
        { id: 'project-specs', label: 'Project Specs.docx', type: 'doc', size: '24 KB' },
        { id: 'notes', label: 'Meeting Notes.txt', type: 'txt', size: '12 KB' },
    ],
    downloads: [
        { id: 'installer', label: 'installer_v2.dmg', type: 'dmg', size: '140 MB' },
        { id: 'image', label: 'screenshot.png', type: 'img', size: '2.4 MB' },
    ],
    recents: [
        { id: 'resume', label: 'Resume.pdf', type: 'pdf', size: '1.2 MB' },
        { id: 'screenshot', label: 'design_mockup.png', type: 'img', size: '4.1 MB' },
    ]
};

export default function Finder() {
    const [activeCategory, setActiveCategory] = useState('documents');
    const [selectedFile, setSelectedFile] = useState(null);
    const { openWindow } = useSystemStore();

    const handleDoubleClick = (file) => {
        if (file.id === 'resume') {
            openWindow('resume-viewer', 'Resume.pdf', Resume, { width: 800, height: 900 });
        }
    };

    const currentFiles = mockFiles[activeCategory] || [];

    return (
        <div className="finder-surface h-full min-h-0 overflow-hidden flex text-black dark:text-white">
            {/* Sidebar */}
            <aside className="finder-sidebar w-48 shrink-0 overflow-y-auto pt-4 text-sm select-none">
                {sidebarItems.map((group) => (
                    <div key={group.section} className="mb-5 px-2 last:mb-3">
                        <h3 className="px-2 text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">{group.section}</h3>
                        <div className="flex flex-col gap-0.5">
                            {group.items.map((item) => (
                                <button
                                    type="button"
                                    key={item.id}
                                    onClick={() => setActiveCategory(item.id)}
                                    className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-emerald-300 ${activeCategory === item.id
                                        ? 'bg-emerald-300 text-zinc-950'
                                        : 'hover:bg-white/8 text-zinc-300'
                                        }`}
                                >
                                    <item.icon className={`w-4 h-4 ${activeCategory === item.id ? 'text-zinc-950' : 'text-emerald-300/85'}`} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </aside>

            {/* Main Content */}
            <div className="min-w-0 min-h-0 flex-1 flex flex-col bg-zinc-950/35">
                {/* Finder Toolbar (Mock) */}
                <div className="finder-toolbar flex h-10 shrink-0 items-center justify-between gap-4 px-4 text-zinc-500">
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-2">
                            <ChevronRight className="w-5 h-5 rotate-180 opacity-50 cursor-pointer hover:bg-white/10 rounded" />
                            <ChevronRight className="w-5 h-5 opacity-50 cursor-not-allowed" />
                        </div>
                        <span className="font-semibold text-black dark:text-white capitalize">
                            {sidebarItems.flatMap(g => g.items).find(i => i.id === activeCategory)?.label || activeCategory}
                        </span>
                    </div>
                </div>

                {/* File Grid */}
                <div
                    className="min-h-0 flex-1 overflow-y-auto p-4"
                    onClick={() => setSelectedFile(null)}
                >
                    {currentFiles.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 select-none">
                            <Folder className="w-16 h-16 mb-4 opacity-20" />
                            <p>Folder is empty</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] content-start gap-4">
                            {currentFiles.map((file) => (
                                <div
                                    key={file.id}
                                    onClick={(e) => { e.stopPropagation(); setSelectedFile(file.id); }}
                                    onDoubleClick={() => handleDoubleClick(file)}
                                    className={`group flex min-w-0 w-full flex-col items-center rounded-md border p-2 cursor-default ${selectedFile === file.id
                                        ? 'bg-emerald-300/10 border-emerald-300/40'
                                        : 'hover:bg-white/5 border-transparent'
                                        }`}
                                >
                                    <div className="w-16 h-20 mb-2 flex items-center justify-center relative">
                                        {file.type === 'pdf' && (
                                            <div className="w-12 h-16 bg-red-500 rounded-sm shadow-md flex flex-col items-center justify-center text-white font-bold text-[10px] relative">
                                                <span className="mt-auto mb-2">PDF</span>
                                                <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-bl-lg" />
                                            </div>
                                        )}
                                        {file.type === 'doc' && (
                                            <div className="w-12 h-16 bg-blue-500 rounded-sm shadow-md flex flex-col items-center justify-center text-white font-bold text-[10px] relative">
                                                <span className="mt-auto mb-2">DOC</span>
                                                <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-bl-lg" />
                                            </div>
                                        )}
                                        {file.type === 'txt' && (
                                            <div className="w-12 h-16 bg-gray-500 rounded-sm shadow-md flex flex-col items-center justify-center text-white font-bold text-[10px] relative">
                                                <span className="mt-auto mb-2">TXT</span>
                                                <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-bl-lg" />
                                            </div>
                                        )}
                                        {file.type === 'img' && (
                                            <div className="w-14 h-14 bg-purple-500 rounded-md shadow-md flex items-center justify-center text-white">
                                                <FileIcon className="w-8 h-8" />
                                            </div>
                                        )}
                                        {file.type === 'dmg' && (
                                            <div className="w-14 h-14 bg-yellow-500 rounded-md shadow-md flex items-center justify-center text-white">
                                                <HardDrive className="w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                    <span className={`w-full max-w-full break-words rounded px-1.5 py-0.5 text-center text-xs leading-tight ${selectedFile === file.id
                                        ? 'bg-emerald-300 text-zinc-950'
                                        : 'text-zinc-300'
                                        }`}>
                                        {file.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
