import { Calendar, Tag, ChevronRight } from 'lucide-react';

const logs = [
    {
        id: 1,
        title: 'Migrating to React 19',
        date: '2024-03-15',
        tag: 'Engineering',
        preview: 'Exploring the new features in React 19, including the compiler and server components...'
    },
    {
        id: 2,
        title: 'Why I prefer Tailwind over CSS varieties',
        date: '2024-02-28',
        tag: 'Opinion',
        preview: 'Utility-first CSS might look ugly in HTML, but the productivity boost is undeniable...'
    },
    {
        id: 3,
        title: 'System Design: Rate Limiting',
        date: '2024-01-10',
        tag: 'System Design',
        preview: 'A deep dive into Token Bucket, Leaky Bucket, and Fixed Window counters...'
    },
    {
        id: 4,
        title: 'Building AdvityaOS',
        date: '2023-12-05',
        tag: 'Project',
        preview: 'How I built a Mac-like OS in the browser using React, Zustand, and Framer Motion...'
    }
];

export default function Logs() {
    return (
        <div className="h-full p-6 text-black dark:text-white overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6">System Logs</h1>

            <div className="space-y-4">
                {logs.map((log) => (
                    <div key={log.id} className="group p-4 bg-white/50 dark:bg-black/20 border border-white/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-mono text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded flex items-center gap-1">
                                <Tag className="w-3 h-3" />
                                {log.tag}
                            </span>
                            <span className="text-xs opacity-50 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {log.date}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">{log.title}</h3>
                        <p className="text-sm opacity-70 mb-3">{log.preview}</p>

                        <div className="flex items-center text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                            Read Entry <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
