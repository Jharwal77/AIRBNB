import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { CloseIcon } from './Icons';

export default function Modal({ onClose, labelledBy, children, panelClass = '' }) {
  const trapRef = useFocusTrap(true);
  useBodyScrollLock(true);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 animate-overlay-in sm:items-center" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-white p-8 animate-sheet-in sm:max-w-[680px] sm:rounded-2xl ${panelClass}`}
      >
        <button type="button" onClick={onClose} aria-label="Close" className="icon-btn absolute left-4 top-4 h-8 w-8">
          <CloseIcon size={15} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
