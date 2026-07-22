import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const bootSteps = [
  'Loading workspace',
  'Mounting portfolio data',
  'Starting interface services',
  'AdvityaOS is ready',
];

const MotionDiv = motion.div;

export function BootSequence({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = bootSteps.map((_, index) => setTimeout(() => setStep(index), index * 560));
    const completeTimer = setTimeout(onComplete, 2_450);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const progress = ((step + 1) / bootSteps.length) * 100;

  return (
    <MotionDiv
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 z-[100] grid place-items-center bg-zinc-950 font-mono text-zinc-100"
    >
      <div className="w-[min(28rem,calc(100vw-3rem))]">
        <div className="mb-10 flex items-center gap-3">
          <img src="/logo.png" alt="" className="size-11 rounded-md" />
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-white">ADVITYAOS</p>
            <p className="mt-1 text-xs text-zinc-500">boot sequence / 1.0</p>
          </div>
        </div>
        <div className="h-px bg-white/12">
          <MotionDiv className="h-px bg-emerald-300" animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} />
        </div>
        <p className="mt-4 text-sm text-emerald-200">[{String(step + 1).padStart(2, '0')}/{String(bootSteps.length).padStart(2, '0')}] {bootSteps[step]}</p>
      </div>
    </MotionDiv>
  );
}
