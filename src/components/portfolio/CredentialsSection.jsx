import { Award } from 'lucide-react';
import { credentials } from '../../data/credentials';
import { GlassCard } from '../shared/GlassCard';
import { ScrollReveal } from '../shared/ScrollReveal';
import { SectionHeading } from '../shared/SectionHeading';
import { TechBadge } from '../shared/TechBadge';

export function CredentialsSection() {
  return (
    <section id="credentials" className="border-y border-zinc-200 bg-white/60 px-4 py-24 dark:border-white/10 dark:bg-white/[0.025] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Proof across cloud, AI, and competition."
          description="Certifications and awards that support the technical work shown throughout the portfolio."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {credentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.05}>
              <GlassCard className="h-full p-6">
                {item.image ? <div className="mb-5 overflow-hidden rounded-md border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-white/[0.04]"><img src={item.image} alt={`${item.title} certificate`} className="aspect-[16/10] h-full w-full object-contain" /></div> : null}
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{item.publication} / {item.year}</p>
                  <Award size={17} className="text-amber-500 dark:text-amber-300" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.abstract}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <TechBadge key={tag}>{tag}</TechBadge>)}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
