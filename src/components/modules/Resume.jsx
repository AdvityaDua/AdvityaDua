import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Resume() {
    return (
        <div className="h-full bg-white text-black p-8 overflow-y-auto font-sans">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                {/* Header */}
                <div className="border-b-2 border-black pb-4">
                    <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">Advitya Dua</h1>
                    <p className="text-lg font-medium text-gray-600">Full Stack Engineer & System Architect</p>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                        <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>hello@example.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Linkedin className="w-4 h-4" />
                            <span>linkedin.com/in/advitya</span>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Main Column */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <section>
                            <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Professional Experience</h3>

                            <div className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-lg">Senior Software Engineer</h4>
                                    <span className="text-sm text-gray-600">2023 - Present</span>
                                </div>
                                <div className="text-gray-700 italic mb-2">Tech Corp Inc.</div>
                                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                                    <li>Architected and led the migration of a legacy <b>monolith to microservices</b>, reducing deployment time by 60%.</li>
                                    <li>Optimized high-traffic API endpoints, resulting in a <b>40% reduction in latency</b> and 25% cost savings on infrastructure.</li>
                                    <li>Mentored junior developers and established code quality standards, increasing test coverage from 40% to 90%.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-lg">Full Stack Developer</h4>
                                    <span className="text-sm text-gray-600">2021 - 2023</span>
                                </div>
                                <div className="text-gray-700 italic mb-2">Startup X</div>
                                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                                    <li>Developed the core MVP using <b>React, Node.js, and PostgreSQL</b>, scaling to 100k+ active users.</li>
                                    <li>Implemented real-time features using WebSockets (Socket.io) for an interactive collaborative dashboard.</li>
                                    <li>Integrated Stripe payment gateway and automated invoicing workflows.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Projects</h3>
                            <div className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold">AdvityaOS</h4>
                                    <a href="#" className="text-sm text-blue-600 hover:underline">Live Demo</a>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">
                                    A web-based operating system simulation built with React, Zustand, and Framer Motion. Features a functional window manager, file system, and terminal.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="flex flex-col gap-6">
                        <section>
                            <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Tailwind CSS'].map(skill => (
                                    <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700 border border-gray-200">{skill}</span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Education</h3>
                            <div>
                                <h4 className="font-bold">BS Computer Science</h4>
                                <div className="text-sm text-gray-600">University of Technology</div>
                                <div className="text-sm text-gray-500">2017 - 2021</div>
                            </div>
                        </section>

                        <section>
                            <button className="w-full py-2 bg-black text-white rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}
