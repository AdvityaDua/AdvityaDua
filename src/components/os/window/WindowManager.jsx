import { AnimatePresence, motion } from 'framer-motion';
import { useSystemStore } from '../../../store/systemStore';
import { WindowFrame } from './WindowFrame';

const MotionDiv = motion.div;

export function WindowManager() {
  const windows = useSystemStore((state) => state.windows);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <AnimatePresence initial={false}>
        {windows.map((window) => (
          <MotionDiv
            key={window.id}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className="absolute inset-0"
          >
            <WindowFrame window={window} />
          </MotionDiv>
        ))}
      </AnimatePresence>
    </div>
  );
}
