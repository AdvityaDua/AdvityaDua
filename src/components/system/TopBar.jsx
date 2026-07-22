import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Power } from 'lucide-react';

export default function TopBar({ onExitPortfolio }) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 text-white text-xs z-50 select-none">
                <div className="flex items-center gap-4">
                    <div className="hover:bg-white/20 rounded transition-colors cursor-pointer">
                        <img src='/logo.png' alt='logo' className='w-4 h-4' />
                    </div>
                    <span className="font-semibold cursor-pointer hover:text-white/80">AdvityaOS</span>
                    {onExitPortfolio && (
                        <button
                            type="button"
                            onClick={onExitPortfolio}
                            className="inline-flex items-center gap-1.5 rounded px-2 py-1 font-medium text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white/70"
                            aria-label="Exit to portfolio"
                        >
                            <Power className="h-3.5 w-3.5" />
                            <span>Exit</span>
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <span>{format(time, 'EEE MMM d h:mm aa')}</span>
                </div>
            </div>
        </>
    );
}
