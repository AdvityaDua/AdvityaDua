import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds, offset = 140) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, top: element.getBoundingClientRect().top } : null;
        })
        .filter(Boolean)
        .reverse()
        .find((section) => section.top <= offset);

      setActiveId(current?.id ?? sectionIds[0] ?? '');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset, sectionIds]);

  return activeId;
}
