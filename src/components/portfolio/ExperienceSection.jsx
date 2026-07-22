import { experience } from '../../data/experience';
import { GlassCard } from '../shared/GlassCard';
import { ScrollReveal } from '../shared/ScrollReveal';
import { SectionHeading } from '../shared/SectionHeading';
import { TechBadge } from '../shared/TechBadge';

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="A practical timeline."
          description="Focused on the kinds of work, decisions, and technical judgment this portfolio should communicate."
        />
        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-white/10 md:before:left-1/2">
          {experience.map((item, index) => (
            <ScrollReveal key={`${item.company}-${item.role}`} delay={index * 0.05}>
              <div className="relative grid gap-5 pl-10 md:grid-cols-2 md:pl-0">
                <span className="absolute left-[11px] top-6 size-3 rounded-full border border-sky-200 bg-sky-300 md:left-1/2 md:-translate-x-1/2" />
                <div className={index % 2 === 0 ? 'md:pr-8' : 'md:col-start-2 md:pl-8'}>
                  <GlassCard className="p-6">
                    <p className="text-sm text-emerald-700 dark:text-sky-200">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">{item.company}</p>
                    <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>- {highlight}</li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
