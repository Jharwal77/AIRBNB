import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useListing } from '../context/ListingContext';
import { useGallery } from '../context/GalleryContext';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { assetUrl } from '../api/client';
import { ChevronLeftIcon, ShareIcon, HeartIcon } from './Icons';

function chunkGroup(photos) {
  const rows = [];
  photos.forEach((p, i) => {
    if (i % 3 === 0) rows.push([p]);
    else if (i % 3 === 1) rows.push([p]);
    else rows[rows.length - 1].push(p);
  });
  return rows;
}

export default function PhotoTour() {
  const { listing } = useListing();
  const { closeTour, openLightbox, lightboxIndex } = useGallery();
  const closeRef = useRef(null);
  const sectionRefs = useRef({});
  const trapRef = useFocusTrap(lightboxIndex === null, { initialFocusRef: closeRef });
  useBodyScrollLock(true);

  if (!listing) return null;
  const groups = listing.photoGroups;

  const jump = (category) => {
    sectionRefs.current[category]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return createPortal(
    <div ref={trapRef} role="dialog" aria-modal="true" aria-label="Photo tour" tabIndex={-1} className="fixed inset-0 z-50 flex flex-col bg-white animate-overlay-in">
      <header className="grid h-[88px] shrink-0 grid-cols-[1fr_auto_1fr] items-center px-6">
        <div>
          <button ref={closeRef} type="button" onClick={closeTour} aria-label="Back to listing" className="icon-btn h-10 w-10">
            <ChevronLeftIcon size={16} />
          </button>
        </div>
        <h2 className="text-[16px] font-semibold">Photo tour</h2>
        <div className="flex items-center justify-end gap-6">
          <button type="button" aria-label="Share" className="icon-btn h-10 w-10">
            <ShareIcon size={18} />
          </button>
          <button type="button" aria-label="Save" className="icon-btn h-10 w-10">
            <HeartIcon size={18} />
          </button>
        </div>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-tour px-0 pb-24">
          <div className="grid grid-cols-8 gap-x-[14px] gap-y-6">
            {groups.map((g) => (
              <button key={g.category} type="button" onClick={() => jump(g.category)} className="group text-left">
                <div className="h-[105px] overflow-hidden rounded-lg">
                  <img src={assetUrl(g.photos[0].url)} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-2 text-[14px] leading-[18px] text-body group-hover:underline">{g.category}</div>
              </button>
            ))}
          </div>
          <div className="mt-16 space-y-20">
            {groups.map((g) => (
              <section
                key={g.category}
                ref={(el) => {
                  sectionRefs.current[g.category] = el;
                }}
                className="grid scroll-mt-6 grid-cols-[1fr_453px] gap-x-16"
                aria-label={g.category}
              >
                <div className="pt-2">
                  <h3 className="text-[30px] font-semibold leading-[38px] tracking-[-0.3px]">{g.category}</h3>
                  {g.caption && <p className="mt-3 text-[16px] text-muted">{g.caption}</p>}
                </div>
                <div className="flex flex-col gap-[14px]">
                  {chunkGroup(g.photos).map((row, ri) =>
                    row.length === 1 ? (
                      <button key={ri} type="button" onClick={() => openLightbox(row[0].index)} className="group overflow-hidden rounded-lg">
                        <img src={assetUrl(row[0].url)} alt={g.category} className="aspect-[453/300] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                      </button>
                    ) : (
                      <div key={ri} className="grid grid-cols-2 gap-[14px]">
                        {row.map((p) => (
                          <button key={p.index} type="button" onClick={() => openLightbox(p.index)} className="group overflow-hidden rounded-lg">
                            <img src={assetUrl(p.url)} alt={g.category} className="aspect-[220/140] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                          </button>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
