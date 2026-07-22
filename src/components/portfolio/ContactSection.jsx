import { Mail } from 'lucide-react';
import { personal } from '../../data/personal';
import { GlassCard } from '../shared/GlassCard';
import { SectionHeading } from '../shared/SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something clear and useful."
          description="The fastest path is email, with social links available for context and project history."
        />
        <GlassCard className="p-6 text-center md:p-10">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            <Mail size={18} />
            {personal.email}
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {personal.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
