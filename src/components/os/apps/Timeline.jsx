import { useMemo, useState } from 'react';
import { BriefcaseBusiness, ChevronDown, Medal, Sparkles } from 'lucide-react';
import { experience } from '../../../data/experience';
import { projects } from '../../../data/projects';
import { research } from '../../../data/research';
import { AppHeader, AppShell, DataTag } from './OsPrimitives';

export function Timeline() {
  const [expanded, setExpanded] = useState(null);
  const entries = useMemo(() => [
    ...experience.map((item) => ({ id: `career-${item.company}`, type: 'career', date: item.period, title: item.role, place: item.company, copy: item.description, tags: item.technologies })),
    ...projects.map((item) => ({ id: `project-${item.id}`, type: 'project', date: item.year, title: item.title, place: item.category, copy: item.description, tags: item.stack })),
    ...research.map((item) => ({ id: `research-${item.title}`, type: 'research', date: item.year, title: item.title, place: item.publication, copy: item.abstract, tags: item.tags })),
  ], []);

  return <AppShell className="os-timeline-app"><AppHeader eyebrow="career graph / indexed events" title="Timeline" meta={`${entries.length} events`} /><div className="os-timeline-layout"><div className="os-heatmap" aria-label="Activity heatmap">{Array.from({ length: 72 }, (_, index) => <span key={index} className={`heat-${(index * 7) % 5}`} />)}</div><div className="os-timeline-list">{entries.map((entry) => { const isExpanded = expanded === entry.id; return <article key={entry.id} className={`os-timeline-entry type-${entry.type}`}><button type="button" onClick={() => setExpanded(isExpanded ? null : entry.id)}><span className="os-timeline-marker">{entry.type === 'career' ? <BriefcaseBusiness size={13} /> : entry.type === 'project' ? <Sparkles size={13} /> : <Medal size={13} />}</span><span className="os-timeline-date">{entry.date}</span><span className="os-timeline-title"><strong>{entry.title}</strong><small>{entry.place}</small></span><ChevronDown size={15} className={isExpanded ? 'rotate-180' : ''} /></button>{isExpanded ? <div className="os-timeline-detail"><p>{entry.copy}</p><div className="os-chip-cloud">{entry.tags.map((tag) => <DataTag key={tag}>{tag}</DataTag>)}</div></div> : null}</article>; })}</div></div></AppShell>;
}
