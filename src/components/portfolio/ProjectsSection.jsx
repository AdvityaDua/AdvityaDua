import { useState } from 'react';
import { projects } from '../../data/projects';
import { ScrollReveal } from '../shared/ScrollReveal';
import { SectionHeading } from '../shared/SectionHeading';
import { ProjectCard } from './ProjectCard';

const filters = ['All', 'Frontend', 'AI', 'Full Stack', 'Research'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Case Files"
          title="Selected work, organized like evidence."
          description="Each project gets a clear role in the system: context, stack, and the fastest path to inspect more."
        />
        <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter projects">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-md border px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-200 ${
                  isActive
                    ? 'border-emerald-700 bg-emerald-700 text-white dark:border-emerald-200 dark:bg-emerald-200 dark:text-zinc-950'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-emerald-700/40 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-emerald-200/40 dark:hover:text-white'
                }`}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <div className="grid gap-5 lg:grid-cols-12">
          {visibleProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.04}
              className={project.featured && index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
