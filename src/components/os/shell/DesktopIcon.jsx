import { createElement } from 'react';

export function DesktopIcon({ label, icon: Icon, index, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="os-desktop-icon group grid w-24 justify-items-center gap-2 p-2 text-center text-xs font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span className="relative grid size-12 place-items-center border border-white/16 bg-zinc-950/38 backdrop-blur-sm transition">
        <span className="absolute left-1 top-1 font-mono text-[0.55rem] text-emerald-200/70">{String(index).padStart(2, '0')}</span>
        {createElement(Icon, { className: 'size-6 text-white' })}
      </span>
      <span className="drop-shadow-md">{label}</span>
    </button>
  );
}
