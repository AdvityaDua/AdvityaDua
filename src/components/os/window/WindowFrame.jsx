import { Rnd } from 'react-rnd';
import { Maximize2, Minus, X } from 'lucide-react';
import { useSystemStore } from '../../../store/systemStore';

const WINDOW_TOP = 32;
const WINDOW_BOTTOM = 88;
const SNAP_THRESHOLD = 28;

function snappedGeometry(snap) {
  const width = window.innerWidth;
  const height = window.innerHeight - WINDOW_TOP - WINDOW_BOTTOM;
  const halfWidth = Math.floor(width / 2);
  const halfHeight = Math.floor(height / 2);

  if (snap === 'left') return { x: 0, y: WINDOW_TOP, width: halfWidth, height };
  if (snap === 'right') return { x: halfWidth, y: WINDOW_TOP, width: width - halfWidth, height };
  if (snap === 'top-left') return { x: 0, y: WINDOW_TOP, width: halfWidth, height: halfHeight };
  if (snap === 'top-right') return { x: halfWidth, y: WINDOW_TOP, width: width - halfWidth, height: halfHeight };
  if (snap === 'bottom-left') return { x: 0, y: WINDOW_TOP + halfHeight, width: halfWidth, height: height - halfHeight };
  if (snap === 'bottom-right') return { x: halfWidth, y: WINDOW_TOP + halfHeight, width: width - halfWidth, height: height - halfHeight };
  if (snap === 'maximized') return { x: 0, y: WINDOW_TOP, width, height };
  return null;
}

function getSnapTarget(position, size) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight - WINDOW_BOTTOM;
  const width = Number.parseFloat(size.width);
  const height = Number.parseFloat(size.height);
  const atLeft = position.x <= SNAP_THRESHOLD;
  const atRight = position.x + width >= viewportWidth - SNAP_THRESHOLD;
  const atTop = position.y <= WINDOW_TOP + SNAP_THRESHOLD;
  const atBottom = position.y + height >= viewportHeight - SNAP_THRESHOLD;

  if (atTop && atLeft) return 'top-left';
  if (atTop && atRight) return 'top-right';
  if (atBottom && atLeft) return 'bottom-left';
  if (atBottom && atRight) return 'bottom-right';
  if (atLeft) return 'left';
  if (atRight) return 'right';
  if (atTop) return 'maximized';
  return null;
}

export function WindowFrame({ window: appWindow }) {
  const { closeWindow, minimizeWindow, toggleMaximize, focusWindow, updateWindowPosition, updateWindowSize, snapWindow, releaseSnap } = useSystemStore();
  const { id, title, position, size, zIndex, minimized, component: Content, snap } = appWindow;
  const geometry = snap ? snappedGeometry(snap) : null;

  if (minimized) return null;

  return (
    <Rnd
      default={{ x: position.x, y: position.y, width: size.width, height: size.height }}
      position={geometry ? { x: geometry.x, y: geometry.y } : position}
      size={geometry ? { width: geometry.width, height: geometry.height } : size}
      minWidth={320}
      minHeight={240}
      bounds="parent"
      enableResizing={!snap}
      dragHandleClassName="os-window-header"
      onDragStart={() => {
        focusWindow(id);
        if (snap && geometry) {
          releaseSnap(id, { x: geometry.x, y: geometry.y }, { width: geometry.width, height: geometry.height });
        }
      }}
      onDragStop={(_event, data) => {
        const nextPosition = { x: data.x, y: data.y };
        updateWindowPosition(id, nextPosition);
        const nextSnap = getSnapTarget(nextPosition, size);
        if (nextSnap) snapWindow(id, nextSnap);
      }}
      onResizeStop={(_event, _direction, ref, _delta, nextPosition) => {
        updateWindowSize(id, { width: ref.style.width, height: ref.style.height });
        updateWindowPosition(id, nextPosition);
      }}
      onMouseDown={() => focusWindow(id)}
      style={{ zIndex, display: 'flex' }}
      className={`os-window pointer-events-auto flex flex-col overflow-hidden ${snap ? 'rounded-none border-x-0' : 'rounded-md'}`}
    >
      <div
        className="os-window-header flex h-10 shrink-0 cursor-default items-center justify-between px-3"
        onDoubleClick={() => toggleMaximize(id)}
      >
        <div className="flex items-center gap-2">
          <button type="button" onClick={(event) => { event.stopPropagation(); closeWindow(id); }} className="grid size-3 place-items-center rounded-full bg-red-500 text-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500" aria-label={`Close ${title}`}><X size={8} /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); minimizeWindow(id); }} className="grid size-3 place-items-center rounded-full bg-amber-400 text-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500" aria-label={`Minimize ${title}`}><Minus size={8} /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); toggleMaximize(id); }} className="grid size-3 place-items-center rounded-full bg-emerald-500 text-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" aria-label={`Maximize ${title}`}><Maximize2 size={8} /></button>
        </div>
        <p className="pointer-events-none select-none text-sm font-medium tracking-[0.04em] text-white/88">{title}</p>
        <span className="w-12 font-mono text-[0.6rem] text-emerald-200/65" aria-hidden="true">MODULE</span>
      </div>
      <div className="os-window-content relative min-h-0 flex-1 overflow-auto">
        <Content />
      </div>
    </Rnd>
  );
}
