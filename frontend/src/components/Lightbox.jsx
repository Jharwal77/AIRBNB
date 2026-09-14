import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useListing } from '../context/ListingContext';
import { useGallery } from '../context/GalleryContext';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { assetUrl } from '../api/client';
import { GridIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function Lightbox() {
  const { listing } = useListing();
  const { lightboxIndex, closeLightbox, openLightbox } = useGallery();
  const closeRef = useRef(null);
  const trapRef = useFocusTrap(true, { initialFocusRef: closeRef });
  useBodyScrollLock(true);

  const total = listing?.photos?.length || 0;
  const index = lightboxIndex ?? 0;
  const photo = listing?.photos?.[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') openLightbox(Math.min(total - 1, index + 1));
      if (e.key === 'ArrowLeft') openLightbox(Math.max(0, index - 1));
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index, total, openLightbox, closeLightbox]);

  if (!listing || !photo) return null;

  return createPortal(
    <div ref={trapRef} role="dialog" aria-modal="true" aria-label={`${photo.category}, photo ${index + 1} of ${total}`} tabIndex={-1} className="fixed inset-0 z-[60] flex flex-col bg-white animate-overlay-in">
      <header className="grid h-[72px] shrink-0 grid-cols-[1fr_auto_1fr] items-center px-6">
        <div>
          <button type="button" onClick={closeLightbox} aria-label="Open photo tour" className="icon-btn h-10 w-10">
            <GridIcon size={16} />
          </button>
        </div>
        <h2 className="text-[16px] font-semibold">{photo.category}</h2>
        <div className="flex items-center justify-end gap-6">
          <span className="text-[14px] text-body">
            {index + 1} of {total}
          </span>
          <button ref={closeRef} type="button" onClick={closeLightbox} aria-label="Close" className="icon-btn h-10 w-10">
            <CloseIcon size={16} />
          </button>
        </div>
      </header>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-24 pb-[88px] pt-4">
        <button
          type="button"
          onClick={() => openLightbox(Math.max(0, index - 1))}
          disabled={index === 0}
          aria-label="Previous photo"
          className="absolute left-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-edge bg-white text-ink transition-colors hover:bg-surface disabled:border-transparent disabled:bg-transparent disabled:text-disabled disabled:hover:bg-transparent"
        >
          <ChevronLeftIcon size={13} />
        </button>
        <img key={index} src={assetUrl(photo.url)} alt={photo.category} className="max-h-full max-w-full rounded-sm object-contain animate-photo-in" />
        <button
          type="button"
          onClick={() => openLightbox(Math.min(total - 1, index + 1))}
          disabled={index === total - 1}
          aria-label="Next photo"
          className="absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-edge bg-white text-ink transition-colors hover:bg-surface disabled:border-transparent disabled:bg-transparent disabled:text-disabled disabled:hover:bg-transparent"
        >
          <ChevronRightIcon size={13} />
        </button>
      </div>
    </div>,
    document.body
  );
}
