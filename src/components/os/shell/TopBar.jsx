import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Power } from 'lucide-react';

export function TopBar({ onExitPortfolio }) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="os-topbar absolute inset-x-0 top-0 z-50 flex h-9 items-center justify-between px-3 text-xs sm:px-4">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="" className="size-5 rounded-sm" />
        <span className="font-semibold tracking-[0.08em]">ADVITYAOS</span>
        <span className="hidden items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-emerald-200/80 sm:inline-flex">
          <span className="size-1.5 rounded-full bg-emerald-300" />
          workspace online
        </span>
        <button
          type="button"
          onClick={onExitPortfolio}
          className="inline-flex items-center gap-1.5 border-l border-white/12 pl-3 font-medium text-white/70 transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Power size={13} />
          Exit
        </button>
      </div>
      <time dateTime={time.toISOString()} className="font-mono text-[0.65rem] tracking-[0.08em] text-white/65">{format(time, 'EEE MMM d / HH:mm')}</time>
    </header>
  );
}
