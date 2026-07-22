import { useEffect, useState } from 'react';

export function ScrollSignal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(Math.max(nextProgress, 0), 1));
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className="portfolio-scroll-signal"
      style={{ '--scroll-progress': progress }}
      aria-hidden="true"
    >
      <div className="portfolio-scroll-signal-track" />
      <div className="portfolio-scroll-signal-streak" />
    </div>
  );
}
