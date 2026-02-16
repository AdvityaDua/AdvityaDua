import { Cpu, Database, Globe, Server, Zap } from 'lucide-react';

const SkillBar = ({ label, level, color }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{label}</span>
            <span className="text-sm opacity-60">{level}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
                className={`h-full ${color}`}
                style={{ width: `${level}%` }}
            />
        </div>
    </div>
);

export default function Monitor() {
    return (
        <div className="h-full p-6 text-black dark:text-white overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6">System Monitor</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Core Stats */}
                <div>
                    <div className="bg-white/50 dark:bg-black/20 border border-white/20 rounded-xl p-5 mb-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-blue-500" />
                            Processing Units (Frontend)
                        </h3>
                        <SkillBar label="React / Next.js" level={95} color="bg-blue-500" />
                        <SkillBar label="TypeScript" level={90} color="bg-blue-400" />
                        <SkillBar label="Tailwind CSS" level={98} color="bg-cyan-400" />
                        <SkillBar label="Framer Motion" level={85} color="bg-purple-400" />
                    </div>

                    <div className="bg-white/50 dark:bg-black/20 border border-white/20 rounded-xl p-5">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Server className="w-5 h-5 text-green-500" />
                            Memory & Storage (Backend)
                        </h3>
                        <SkillBar label="Node.js" level={88} color="bg-green-500" />
                        <SkillBar label="Python / FastAPI" level={82} color="bg-yellow-500" />
                        <SkillBar label="PostgreSQL" level={85} color="bg-indigo-500" />
                        <SkillBar label="Redis" level={75} color="bg-red-500" />
                    </div>
                </div>

                {/* Right Column: Infrastructure & Other */}
                <div>
                    <div className="bg-white/50 dark:bg-black/20 border border-white/20 rounded-xl p-5 mb-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-orange-500" />
                            Network (Infrastructure)
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Nginx'].map(item => (
                                <span key={item} className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-sm font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-5 text-white">
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            System Status
                        </h3>
                        <div className="text-4xl font-bold mb-1">Opitzmized</div>
                        <p className="opacity-80 text-sm">All systems running at peak performance.</p>
                        <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-sm">
                            <span>Uptime</span>
                            <span className="font-mono">99.99%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
