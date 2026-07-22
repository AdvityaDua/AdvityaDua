export function AppShell({ children, className = '' }) {
  return <div className={`os-app ${className}`}>{children}</div>;
}

export function AppHeader({ eyebrow, title, meta, children }) {
  return (
    <header className="os-app-header">
      <div>
        <p className="os-app-eyebrow">{eyebrow}</p>
        <h1 className="os-app-title">{title}</h1>
      </div>
      <div className="os-app-header-meta">
        {meta ? <span>{meta}</span> : null}
        {children}
      </div>
    </header>
  );
}

export function DataTag({ children, tone = 'default' }) {
  return <span className={`os-data-tag os-data-tag-${tone}`}>{children}</span>;
}

export function EmptyState({ label }) {
  return <div className="os-empty-state">{label}</div>;
}
