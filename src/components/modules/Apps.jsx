import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Project Alpha',
        description: 'A cutting-edge AI analytics platform that processes real-time data streams.',
        stack: ['React', 'Python', 'AWS'],
        color: 'bg-red-500'
    },
    {
        title: 'Beta Commerce',
        description: 'Headless e-commerce solution with sub-second page loads and global CDN.',
        stack: ['Next.js', 'Stripe', 'Redis'],
        color: 'bg-blue-500'
    },
    {
        title: 'Gamma Social',
        description: 'Decentralized social network protocol built on Web3 technologies.',
        stack: ['Solidity', 'IPFS', 'React'],
        color: 'bg-green-500'
    },
    {
        title: 'Delta Health',
        description: 'Telemedicine app connecting patients with specialists via secure video.',
        stack: ['WebRTC', 'Node.js', 'Postgres'],
        color: 'bg-purple-500'
    }
];

export default function Apps() {
    return (
        <div className="h-full p-6 text-black dark:text-white overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6">Applications</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="group bg-white/50 dark:bg-black/20 border border-white/20 rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-black/40 transition-all cursor-default shadow-sm hover:shadow-xl">
                        <div className={`w-12 h-12 ${project.color} rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                            {project.title[0]}
                        </div>

                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-70 mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map(tech => (
                                <span key={tech} className="px-2 py-1 bg-black/5 dark:bg-white/10 rounded text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <button className="flex-1 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-80 transition-opacity flex items-center justify-center gap-2">
                                View Demo <ArrowRight className="w-3 h-3" />
                            </button>
                            <button className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                <Github className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
