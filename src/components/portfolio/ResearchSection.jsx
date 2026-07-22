import { ArrowUpRight } from 'lucide-react';
import { research } from '../../data/research';
import { GlassCard } from '../shared/GlassCard';
import { ScrollReveal } from '../shared/ScrollReveal';
import { SectionHeading } from '../shared/SectionHeading';
import { TechBadge } from '../shared/TechBadge';

export function ResearchSection() {
  return (
    <section id="research" className="border-y border-zinc-200 bg-white/60 px-4 py-24 dark:border-white/10 dark:bg-white/[0.025] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research"
          title="Ideas connected to implementation."
          description="A compact research area for papers, experiments, and technical notes."
        />
        {research.length ? <div className="grid gap-5 lg:grid-cols-3">
          {research.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.05}>
              <GlassCard className="h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  {item.publication} / {item.year}
                </p>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.abstract}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <TechBadge key={tag}>{tag}</TechBadge>
                  ))}
                </div>
                {item.link && item.link !== '#' ? <a
                  href={item.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:text-emerald-200 dark:hover:text-emerald-100 dark:focus-visible:outline-emerald-200"
                >
                  Read paper
                  <ArrowUpRight size={16} />
                </a> : null}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div> : <div className="border border-dashed border-zinc-300 px-6 py-10 text-sm text-zinc-600 dark:border-white/15 dark:text-zinc-400">Research notes are being indexed. Check back for papers, experiments, and technical write-ups.</div>}
      </div>
    </section>
  );
}
