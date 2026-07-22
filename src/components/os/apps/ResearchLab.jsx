import { useMemo, useState } from 'react';
import { FlaskConical } from 'lucide-react';
import { research } from '../../../data/research';
import { AppHeader, AppShell, DataTag } from './OsPrimitives';

export function ResearchLab() {
  const [selectedTitle, setSelectedTitle] = useState(research[0]?.title);
  const [filter, setFilter] = useState('All');
  const tags = useMemo(() => ['All', ...new Set(research.flatMap((item) => item.tags))], []);
  const visible = research.filter((item) => filter === 'All' || item.tags.includes(filter));
  const selected = visible.find((item) => item.title === selectedTitle) ?? visible[0];

  return <AppShell className="os-research-app"><AppHeader eyebrow="evidence locker / notes" title="Research Lab" meta={`${research.length} records`}><FlaskConical size={17} className="text-emerald-300" /></AppHeader><div className="os-filter-row os-research-filters">{tags.map((tag) => <button key={tag} type="button" className={filter === tag ? 'is-active' : ''} onClick={() => setFilter(tag)}>{tag}</button>)}</div><div className="os-research-layout"><div className="os-research-list">{visible.map((item) => <button type="button" key={item.title} className={selected?.title === item.title ? 'is-selected' : ''} onClick={() => setSelectedTitle(item.title)}><span>{item.year}</span><strong>{item.title}</strong><small>{item.publication}</small></button>)}</div>{selected ? <article className="os-research-reading"><p className="os-app-eyebrow">{selected.publication} / {selected.year}</p><h2>{selected.title}</h2><p>{selected.abstract}</p><div className="os-project-preview-tags">{selected.tags.map((tag) => <DataTag key={tag} tone="accent">{tag}</DataTag>)}</div>{selected.link && selected.link !== '#' ? <a className="os-text-link" href={selected.link}>Open source record -&gt;</a> : null}</article> : <p className="os-empty-state">Research records are being indexed.</p>}</div></AppShell>;
}
