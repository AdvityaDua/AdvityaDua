import { personal } from '../../data/personal';
import { GlassCard } from '../shared/GlassCard';
import { ScrollReveal } from '../shared/ScrollReveal';
import { SectionHeading } from '../shared/SectionHeading';

const principles = [
  {
    label: 'Readable state',
    text: 'Interfaces should expose what changed, what matters, and what the user can do next.',
  },
  {
    label: 'Useful depth',
    text: 'Exploration is welcome, but core information should never require solving the interface.',
  },
  {
    label: 'Proof over polish',
    text: 'The best portfolio moments connect claims to concrete projects, tradeoffs, and shipped behavior.',
  },
];

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Operating Model"
          title="The portfolio has a point of view now."
          description="It borrows from your OS idea, but treats clarity as the product. The playful layer supports the work instead of hiding it."
        />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <GlassCard className="overflow-hidden">
              <div className="border-b border-zinc-200 p-5 dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Profile packet</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="grid size-16 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-xl font-semibold text-white dark:border-white/10 dark:bg-white/[0.06]">
                    {personal.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{personal.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{personal.location} / Full-stack systems</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-px bg-zinc-200 dark:bg-white/10">
                {['Product interfaces', 'Applied AI', 'Cloud dashboards', 'Interactive portfolios'].map((item) => (
                  <div key={item} className="bg-white/90 px-5 py-4 text-sm text-zinc-700 dark:bg-zinc-950/90 dark:text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="space-y-5">
              <GlassCard className="p-6 md:p-8">
                <div className="space-y-5 text-base leading-8 text-zinc-700 dark:text-zinc-300">
                {personal.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                </div>
              </GlassCard>
              <div className="grid gap-3 md:grid-cols-3">
                {principles.map((principle) => (
                  <div key={principle.label} className="border-l border-emerald-700/35 bg-white p-4 shadow-sm dark:border-emerald-200/35 dark:bg-white/[0.035] dark:shadow-none">
                    <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">{principle.label}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{principle.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
