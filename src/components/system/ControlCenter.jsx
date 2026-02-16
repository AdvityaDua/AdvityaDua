import { Wifi, Bluetooth, Battery, Sun, Volume2 } from 'lucide-react';

export default function ControlCenter({ isOpen }) {
    if (!isOpen) return null;

    return (
        <div className="absolute top-9 right-2 w-80 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-4 text-white z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-black/20 rounded-xl p-3 flex flex-col gap-2 hover:bg-black/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <Wifi className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-sm">Wi-Fi</span>
                            <span className="text-xs text-white/60">Home Network</span>
                        </div>
                    </div>
                </div>

                <div className="bg-black/20 rounded-xl p-3 flex flex-col gap-2 hover:bg-black/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <Bluetooth className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-sm">Bluetooth</span>
                            <span className="text-xs text-white/60">On</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4 mb-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-medium text-white/80">Display</span>
                        <div className="flex items-center gap-2">
                            <Sun className="w-4 h-4 text-white/60" />
                            <input type="range" className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-medium text-white/80">Sound</span>
                        <div className="flex items-center gap-2">
                            <Volume2 className="w-4 h-4 text-white/60" />
                            <input type="range" className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black/20 rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Battery className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-sm">Battery</span>
                    <span className="text-xs text-white/60">84% - Charging</span>
                </div>
            </div>
        </div>
    );
}
