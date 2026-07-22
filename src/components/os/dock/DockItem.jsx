import { createElement, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useSystemStore } from '../../../store/systemStore';

const MotionButton = motion.button;

export function DockItem({ app, mouseX, showSeparator }) {
  const ref = useRef(null);
  const openWindow = useSystemStore((state) => state.openWindow);
  const isOpen = useSystemStore((state) => state.windows.some((window) => window.id === app.id && !window.minimized));
  const Icon = app.icon;
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return value - bounds.x - bounds.width / 2;
  });
  const size = useSpring(useTransform(distance, [-140, 0, 140], [38, 66, 38]), { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <>
      {showSeparator ? <span className="mx-1 mb-2 h-8 w-px bg-white/15" aria-hidden="true" /> : null}
      <div className="relative flex flex-col items-center">
        <MotionButton
          ref={ref}
          type="button"
          style={{ width: size }}
          onClick={() => openWindow(app.id, app.label, app.component, app.size)}
          whileTap={{ scale: 0.88 }}
          className="os-dock-item grid aspect-square place-items-center border text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Open ${app.label}`}
        >
          {createElement(Icon, { className: 'size-[54%]' })}
        </MotionButton>
        <span className={`mt-1 size-1 rounded-full bg-white transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />
      </div>
    </>
  );
}
