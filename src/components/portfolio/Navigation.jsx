import { Menu, MonitorUp, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { personal } from '../../data/personal';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/utils';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation({ activeId, onLaunchOS }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const previousScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY < 96 || currentScrollY < previousScrollY.current;

      setVisible(shouldShow);
      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/82 backdrop-blur-xl transition-transform duration-200 dark:border-white/10 dark:bg-zinc-950/82 ${visible || open ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => goToSection('home')}
          className="flex items-center gap-3 rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-200"
        >
          <span className="grid size-9 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-sm font-semibold text-white dark:border-white/10 dark:bg-white/[0.06]">
            {personal.initials}
          </span>
          <span className="hidden text-sm font-medium text-zinc-900 dark:text-zinc-100 sm:block">{personal.name}</span>
          <span className="hidden rounded border border-emerald-700/20 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-200/20 dark:text-emerald-100 md:inline">
            Portfolio OS
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              aria-current={activeId === link.id ? 'page' : undefined}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:text-zinc-400 dark:hover:text-white dark:focus-visible:outline-emerald-200',
                activeId === link.id && 'bg-zinc-950/[0.06] text-zinc-950 dark:bg-white/[0.07] dark:text-white',
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-md border border-zinc-200 bg-zinc-100 text-zinc-700 transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-white/[0.09] dark:focus-visible:outline-emerald-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={onLaunchOS}
            className="hidden items-center gap-2 rounded-md border border-emerald-700/25 bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-emerald-200/30 dark:bg-emerald-200/10 dark:text-emerald-50 dark:hover:bg-emerald-200/16 dark:focus-visible:outline-emerald-200 md:inline-flex"
          >
            <MonitorUp size={16} />
            Launch OS
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-md border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-zinc-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goToSection(link.id)}
                className="rounded-md px-3 py-3 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
