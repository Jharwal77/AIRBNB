import { useEffect, useRef } from 'react';

export function useFocusTrap(active, { initialFocusRef } = {}) {
  const containerRef = useRef(null);
  const restoreRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    restoreRef.current = document.activeElement;
    const container = containerRef.current;
    if (!container) return undefined;

    const selector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusables = () => Array.from(container.querySelectorAll(selector)).filter((el) => el.offsetParent !== null || el === document.activeElement);

    const target = initialFocusRef?.current || focusables()[0] || container;
    const t = window.setTimeout(() => target.focus({ preventScroll: true }), 30);

    const onKey = (e) => {
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      if (restoreRef.current && typeof restoreRef.current.focus === 'function') {
        restoreRef.current.focus({ preventScroll: true });
      }
    };
  }, [active, initialFocusRef]);

  return containerRef;
}
