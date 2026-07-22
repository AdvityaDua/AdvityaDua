import { createElement } from 'react';
import { cn } from '../../lib/utils';

export function GlassCard({ children, className = '', as: Component = 'div' }) {
  return createElement(
    Component,
    {
      className: cn(
        'rounded-lg border border-zinc-200 bg-white/82 shadow-[0_20px_70px_rgba(24,24,27,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)]',
        className,
      ),
    },
    children,
  );
}
