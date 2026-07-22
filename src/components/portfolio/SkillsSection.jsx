import { skillGroups } from '../../data/skills';
import { GlassCard } from '../shared/GlassCard';
import { ScrollReveal } from '../shared/ScrollReveal';
import { SectionHeading } from '../shared/SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-zinc-200 bg-white/60 px-4 py-24 dark:border-white/10 dark:bg-white/[0.025] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Grouped by how they are used."
          description="No arbitrary percentage bars, just the tools and patterns that show up in real project work."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.name} delay={index * 0.04}>
              <GlassCard className="h-full p-6">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{group.name}</h3>
                <div className="mt-5 grid gap-2">
                  {group.skills.map((skill) => (
                    <div key={skill} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
