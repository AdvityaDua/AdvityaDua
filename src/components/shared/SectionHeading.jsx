export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 grid gap-5 border-t border-zinc-200 pt-6 dark:border-white/10 md:mb-14 md:grid-cols-[14rem_minmax(0,1fr)]">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-200">
            {eyebrow}
          </p>
        )}
      </div>
      <div>
      <h2 className="max-w-4xl text-balance text-3xl font-semibold text-zinc-950 dark:text-zinc-50 md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
      </div>
    </div>
  );
}
