import { useMemo, useState } from 'react';
import { Grid2X2, List, Search, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../../data/projects';
import { AppHeader, AppShell, DataTag, EmptyState } from './OsPrimitives';

const categories = ['All', ...new Set(projects.map((project) => project.category))];

export function ProjectsApp() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [view, setView] = useState('grid');
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? null);
  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    const haystack = `${project.title} ${project.description} ${project.stack.join(' ')}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [category, query]);
  const selectedProject = filteredProjects.find((project) => project.id === selectedId) ?? filteredProjects[0];

  return (
    <AppShell className="os-projects-app">
      <AppHeader eyebrow="case files / indexed work" title="Projects" meta={`${filteredProjects.length} visible`}>
        <div className="os-view-toggle" role="group" aria-label="Project view">
          <button type="button" onClick={() => setView('grid')} className={view === 'grid' ? 'is-active' : ''} aria-label="Grid view" aria-pressed={view === 'grid'}><Grid2X2 size={14} /></button>
          <button type="button" onClick={() => setView('list')} className={view === 'list' ? 'is-active' : ''} aria-label="List view" aria-pressed={view === 'list'}><List size={14} /></button>
        </div>
      </AppHeader>
      <div className="os-app-toolbar">
        <label className="os-search-field"><Search size={14} /><span className="sr-only">Search projects</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search case files" /></label>
        <div className="os-filter-row" aria-label="Project categories">
          {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={category === item ? 'is-active' : ''} aria-pressed={category === item}>{item}</button>)}
        </div>
      </div>
      <div className="os-projects-layout">
        <div className={`os-project-grid ${view === 'list' ? 'is-list' : ''}`}>
          {filteredProjects.length === 0 ? <EmptyState label="No case files match this query." /> : filteredProjects.map((project) => (
            <button key={project.id} type="button" onClick={() => setSelectedId(project.id)} className={`os-project-card ${selectedProject?.id === project.id ? 'is-selected' : ''}`}>
              <span className="os-project-card-index">{project.year}</span>
              <span className="os-project-card-title">{project.title}</span>
              <span className="os-project-card-copy">{project.description}</span>
              <span className="os-project-card-tags">{project.stack.slice(0, 3).map((tech) => <DataTag key={tech}>{tech}</DataTag>)}</span>
            </button>
          ))}
        </div>
        {selectedProject ? (
          <aside className="os-project-preview">
            <p className="os-app-eyebrow">selected file / {selectedProject.year}</p>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.longDescription || selectedProject.description}</p>
            <div className="os-project-preview-tags">{selectedProject.stack.map((tech) => <DataTag key={tech} tone="accent">{tech}</DataTag>)}</div>
            {selectedProject.links && (selectedProject.links.github !== '#' || selectedProject.links.live !== '#') ? <div className="os-link-row">{selectedProject.links.github && selectedProject.links.github !== '#' ? <a href={selectedProject.links.github}><Github size={14} /> Code</a> : null}{selectedProject.links.live && selectedProject.links.live !== '#' ? <a href={selectedProject.links.live}><ExternalLink size={14} /> Live surface</a> : null}</div> : null}
          </aside>
        ) : null}
      </div>
    </AppShell>
  );
}
