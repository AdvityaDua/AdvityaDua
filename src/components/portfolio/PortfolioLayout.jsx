import { About } from './About';
import { ContactSection } from './ContactSection';
import { CredentialsSection } from './CredentialsSection';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navigation } from './Navigation';
import { ProjectsSection } from './ProjectsSection';
import { ResearchSection } from './ResearchSection';
import { ScrollSignal } from './ScrollSignal';
import { SkillsSection } from './SkillsSection';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sectionIds = ['home', 'projects', 'research', 'credentials', 'experience', 'skills', 'contact'];

export function PortfolioLayout({ onLaunchOS }) {
  const activeId = useScrollSpy(sectionIds);

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <ScrollSignal />
      <Navigation activeId={activeId} onLaunchOS={onLaunchOS} />
      <main className="relative z-10">
        <Hero onLaunchOS={onLaunchOS} />
        <About />
        <ProjectsSection />
        <ResearchSection />
        <CredentialsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer onLaunchOS={onLaunchOS} />
      </div>
    </div>
  );
}
