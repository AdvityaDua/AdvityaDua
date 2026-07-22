import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function AnimatedCounter({ value, suffix = '' }) {
  const reducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value);
      return undefined;
    }

    let frameId;
    const start = performance.now();
    const duration = 900;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplayValue(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [reducedMotion, value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}
