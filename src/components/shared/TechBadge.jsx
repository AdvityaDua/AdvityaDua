export function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300">
      {children}
    </span>
  );
}
