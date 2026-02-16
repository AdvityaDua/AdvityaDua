import { Monitor, Smartphone } from 'lucide-react';

export default function MobileWarning() {
    return (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6 md:hidden">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center text-white max-w-sm">
                <Monitor className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Desktop Experience</h2>
                <p className="opacity-70 mb-6">
                    AdvityaOS is designed for larger screens. For the best experience, please visit this site on a desktop or laptop.
                </p>
                <div className="text-xs opacity-50 flex items-center justify-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile version not supported</span>
                </div>
            </div>
        </div>
    );
}
