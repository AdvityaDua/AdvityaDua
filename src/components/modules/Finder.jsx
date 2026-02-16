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
        <div className="h-full flex text-black dark:text-white bg-white dark:bg-[#1E1E1E]">
            {/* Sidebar */}
            <div className="w-48 bg-gray-100/80 dark:bg-[#2A2A2A]/90 backdrop-blur-xl border-r border-gray-200 dark:border-white/10 pt-4 flex flex-col gap-6 text-sm select-none">
                {sidebarItems.map((group) => (
                    <div key={group.section} className="px-2">
                        <h3 className="px-2 text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">{group.section}</h3>
                        <div className="flex flex-col gap-0.5">
                            {group.items.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveCategory(item.id)}
                                    className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-default transition-colors ${activeCategory === item.id
                                        ? 'bg-blue-500 text-white'
                                        : 'hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    <item.icon className={`w-4 h-4 ${activeCategory === item.id ? 'text-white' : 'text-blue-500'}`} />
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-white dark:bg-[#1E1E1E]">
                {/* Finder Toolbar (Mock) */}
                <div className="h-10 border-b border-gray-200 dark:border-white/10 flex items-center px-4 gap-4 text-gray-500 justify-between">
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-2">
                            <ChevronRight className="w-5 h-5 rotate-180 opacity-50 cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 rounded" />
                            <ChevronRight className="w-5 h-5 opacity-50 cursor-not-allowed" />
                        </div>
                        <span className="font-semibold text-black dark:text-white capitalize">
                            {sidebarItems.flatMap(g => g.items).find(i => i.id === activeCategory)?.label || activeCategory}
                        </span>
                    </div>
                </div>

                {/* File Grid */}
                <div
                    className="flex-1 p-4 overflow-y-auto"
                    onClick={() => setSelectedFile(null)}
                >
                    {currentFiles.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 select-none">
                            <Folder className="w-16 h-16 mb-4 opacity-20" />
                            <p>Folder is empty</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 content-start">
                            {currentFiles.map((file) => (
                                <div
                                    key={file.id}
                                    onClick={(e) => { e.stopPropagation(); setSelectedFile(file.id); }}
                                    onDoubleClick={() => handleDoubleClick(file)}
                                    className={`flex flex-col items-center p-2 rounded-lg cursor-default border group ${selectedFile === file.id
                                        ? 'bg-blue-100/50 dark:bg-white/10 border-blue-200 dark:border-white/20'
                                        : 'hover:bg-gray-50 dark:hover:bg-white/5 border-transparent'
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
                                    <span className={`text-xs text-center px-1.5 py-0.5 rounded leading-tight w-full break-words ${selectedFile === file.id
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-700 dark:text-gray-300'
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
