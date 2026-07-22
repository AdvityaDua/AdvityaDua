import { motion, useMotionValue } from 'framer-motion';
import { osApps } from '../appRegistry';
import { DockItem } from './DockItem';

const MotionDiv = motion.div;

export function Dock() {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <nav className="absolute inset-x-0 bottom-3 z-50 flex justify-center px-3" aria-label="Application dock">
      <MotionDiv
        onMouseMove={(event) => mouseX.set(event.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="os-dock flex h-16 items-end px-2"
      >
        {osApps.map((app, index) => (
          <DockItem key={app.id} app={app} mouseX={mouseX} showSeparator={index === 4} />
        ))}
      </MotionDiv>
    </nav>
  );
}
