import { Terminal, Cpu, GitBranch, Layers } from 'lucide-react';

export default function Kernel() {
    return (
        <div className="h-full p-6 text-black dark:text-white overflow-y-auto font-mono">
            <div className="max-w-3xl mx-auto">
                <header className="mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <Cpu className="w-8 h-8" />
                        KERNEL Integrity Check
                    </h1>
                    <p className="opacity-60 mt-2">v1.0.0 | System Architecture & Philosophy</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-blue-500 mb-4 flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        1. Core Directive
                    </h2>
                    <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg border-l-4 border-blue-500">
                        <p>
                            "Complexity should be encapsulated, not eliminated. Great software feels simple because the complexity is handled by the system, not the user."
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-purple-500 mb-4 flex items-center gap-2">
                        <GitBranch className="w-5 h-5" />
                        2. Decision Framework
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 font-bold">::</span>
                            <span><strong>User First:</strong> Technology is a tool. If it doesn't solve a user problem, it's overhead.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 font-bold">::</span>
                            <span><strong>Scalability:</strong> Build for 10x growth, but deploy for 1x reality. Avoid premature optimization.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 font-bold">::</span>
                            <span><strong>Maintainability:</strong> Code is read more often than it is written. Variable names matter.</span>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5" />
                        3. Stack Preference
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 border border-gray-200 dark:border-white/10 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="font-bold mb-1">Frontend</div>
                            <div className="text-sm opacity-70">React, TypeScript, Tailwind, Framer Motion</div>
                        </div>
                        <div className="p-3 border border-gray-200 dark:border-white/10 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="font-bold mb-1">Backend</div>
                            <div className="text-sm opacity-70">Node.js, Python, PostgreSQL, Redis</div>
                        </div>
                        <div className="p-3 border border-gray-200 dark:border-white/10 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="font-bold mb-1">Infrastructure</div>
                            <div className="text-sm opacity-70">AWS, Docker, Kubernetes, Terraform</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
