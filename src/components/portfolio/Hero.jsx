import { Activity, ArrowDown, Download, FolderKanban, MonitorUp, Terminal } from 'lucide-react';
import { AnimatedCounter } from '../shared/AnimatedCounter';
import { personal } from '../../data/personal';

const focusAreas = [
  'Interfaces that make technical systems understandable',
  'AI workflows with visible source-of-truth data',
  'Cloud products that are easier to operate than explain',
];

export function Hero({ onLaunchOS }) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden border-b border-zinc-200 px-4 pt-24 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="portfolio-grid absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(250,250,250,0.70)_0%,rgba(250,250,250,0.96)_78%,#fafafa_100%)] dark:bg-[linear-gradient(180deg,rgba(9,9,11,0.72)_0%,rgba(9,9,11,0.94)_78%,#09090b_100%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl gap-8 py-10 lg:grid-cols-[4.5rem_minmax(0,1fr)_28rem] lg:items-center lg:py-16">
        <aside className="hidden h-[34rem] flex-col justify-between border-l border-zinc-200 pl-4 dark:border-white/10 lg:flex">
          <div className="grid gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-zinc-500 [writing-mode:vertical-rl]">
            <span>Advitya Dua</span>
            <span>System Builder</span>
          </div>
          <div className="grid gap-2">
            {['01', '02', '03'].map((item) => (
            <span key={item} className="grid size-8 place-items-center rounded-md border border-zinc-300 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                {item}
              </span>
            ))}
          </div>
        </aside>

        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-700/20 bg-emerald-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-300/[0.08] dark:text-emerald-100">
            <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.45)] dark:bg-emerald-300 dark:shadow-[0_0_20px_rgba(110,231,183,0.7)]" />
            {personal.name} / Available for product work
          </div>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] text-zinc-950 dark:text-white sm:text-6xl lg:text-[6.4rem]">
            I build interfaces with a system underneath.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-700 dark:text-zinc-300 sm:text-xl">
            {personal.name} is a full-stack developer focused on applied AI, cloud products, and portfolio experiences that people can understand without hunting around.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-200 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            >
              <FolderKanban size={17} />
              Open Case Files
            </button>
            <button
              type="button"
              onClick={onLaunchOS}
              className="hidden items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.1] md:inline-flex"
            >
              <MonitorUp size={17} />
              Launch AdvityaOS
            </button>
            <button
              type="button"
              onClick={() => personal.resumeUrl && personal.resumeUrl !== '#' ? window.open(personal.resumeUrl, '_blank', 'noopener,noreferrer') : window.print()}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-white/12 dark:bg-transparent dark:text-zinc-200 dark:hover:bg-white/[0.07] dark:focus-visible:outline-emerald-200"
            >
              <Download size={17} />
              {personal.resumeUrl && personal.resumeUrl !== '#' ? 'Resume' : 'Print Resume'}
            </button>
          </div>

          <div
            className="mt-12 grid max-w-2xl gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 dark:border-white/10 dark:bg-white/10"
            style={{ gridTemplateColumns: `repeat(${personal.stats.length}, minmax(0, 1fr))` }}
          >
            {personal.stats.map((stat) => (
              <div key={stat.label} className="bg-white/88 p-4 dark:bg-zinc-950/88">
                <p className="text-2xl font-semibold text-zinc-950 dark:text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white/86 shadow-[0_24px_90px_rgba(24,24,27,0.14)] backdrop-blur dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-[0_24px_90px_rgba(0,0,0,0.42)]">
            <div className="flex h-10 items-center justify-between border-b border-zinc-200 px-4 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <Terminal size={14} />
                command-center
              </div>
              <span className="rounded border border-amber-700/25 bg-amber-100 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-amber-800 dark:border-amber-200/20 dark:bg-amber-300/10 dark:text-amber-100">
                Live
              </span>
            </div>
            <div className="grid gap-px bg-zinc-200 dark:bg-white/10">
              <div className="bg-white/92 p-5 dark:bg-zinc-950/92">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Operating brief</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-zinc-950 dark:text-white">
                  Ship portfolio content like a product: clear state, visible proof, optional depth.
                </p>
              </div>
              {focusAreas.map((item, index) => (
                <div key={item} className="grid grid-cols-[2.75rem_1fr] bg-white/92 dark:bg-zinc-950/92">
                  <div className="grid place-items-center border-r border-zinc-200 text-xs font-semibold text-zinc-500 dark:border-white/10">
                    0{index + 1}
                  </div>
                  <p className="p-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item}</p>
                </div>
              ))}
              <div className="bg-white/92 p-5 dark:bg-zinc-950/92">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  <Activity size={14} />
                  Next action
                </div>
                <button
                  type="button"
                  onClick={scrollToProjects}
                  className="w-full rounded-md border border-emerald-700/20 bg-emerald-100 px-4 py-3 text-left text-sm font-semibold text-emerald-900 transition hover:bg-emerald-200 dark:border-emerald-200/20 dark:bg-emerald-200/[0.08] dark:text-emerald-50 dark:hover:bg-emerald-200/[0.12]"
                >
                  Review the selected work and system notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToProjects}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white md:block"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
