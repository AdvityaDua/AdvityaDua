import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const MotionDiv = motion.div;

export function ScrollReveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionDiv>
  );
}
