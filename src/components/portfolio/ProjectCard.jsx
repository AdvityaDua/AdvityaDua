import { ExternalLink, Github } from 'lucide-react';
import { GlassCard } from '../shared/GlassCard';
import { TechBadge } from '../shared/TechBadge';

export function ProjectCard({ project, index, className = '' }) {
  return (
    <GlassCard className={`group relative h-full overflow-hidden transition duration-300 hover:border-emerald-700/25 dark:hover:border-emerald-200/25 ${className}`}>
      <div className="absolute right-5 top-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-600">
        file {String(index + 1).padStart(2, '0')}
      </div>
      <div className="grid min-h-full grid-rows-[auto_1fr]">
        <div className="border-b border-zinc-200 p-6 dark:border-white/10">
          <div className="flex items-start justify-between gap-4 pr-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                {project.category} / {project.year}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
            </div>
            {project.featured ? (
              <span className="rounded-md border border-emerald-700/25 bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-200/25 dark:bg-emerald-200/10 dark:text-emerald-100">
                Featured
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col justify-between p-6">
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.longDescription || project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <TechBadge key={item}>{item}</TechBadge>
            ))}
          </div>
          {project.links && (project.links.github !== '#' || project.links.live !== '#') ? <div className="mt-7 flex gap-4 border-t border-zinc-200 pt-5 dark:border-white/10">
            {project.links.github && project.links.github !== '#' ? <a href={project.links.github} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:text-zinc-300 dark:hover:text-white dark:focus-visible:outline-emerald-200"><Github size={16} />Code</a> : null}
            {project.links.live && project.links.live !== '#' ? <a href={project.links.live} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:text-zinc-300 dark:hover:text-white dark:focus-visible:outline-emerald-200"><ExternalLink size={16} />Demo</a> : null}
          </div> : null}
        </div>
      </div>
    </GlassCard>
  );
}
