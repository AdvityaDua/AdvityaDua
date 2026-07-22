import { personal } from '../../data/personal';

export function Footer({ onLaunchOS }) {
  return (
    <footer className="border-t border-zinc-200 px-4 py-8 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Designed and built by {personal.name}. {new Date().getFullYear()}</p>
        <button type="button" onClick={onLaunchOS} className="hidden text-left font-medium text-zinc-700 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:text-zinc-300 dark:hover:text-white md:block dark:focus-visible:outline-emerald-200">
          Launch AdvityaOS
        </button>
      </div>
    </footer>
  );
}
