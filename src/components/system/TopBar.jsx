import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function TopBar() {
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
                </div>

                <div className="flex items-center gap-4">
                    <span>{format(time, 'EEE MMM d h:mm aa')}</span>
                </div>
            </div>
        </>
    );
}
