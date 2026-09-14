import { useEffect } from 'react';

export function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;
    const previous = document.body.style.overflow;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) {
      document.body.style.paddingRight = `${scrollbar}px`;
    }
    return () => {
      document.body.style.overflow = previous;
      document.body.style.paddingRight = '';
    };
  }, [active]);
}
