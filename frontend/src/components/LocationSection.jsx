import { useState } from 'react';
import { useListing } from '../context/ListingContext';
import { SearchIcon, ChevronRightIcon } from './Icons';

function MapArt() {
  return (
    <svg viewBox="0 0 1120 480" className="h-[480px] w-full rounded-xl" role="img" aria-label="Map of Candolim, Goa">
      <rect width="1120" height="480" fill="#e8efe3" />
      <path d="M0 0h450L310 480H0z" fill="#9fcbe3" />
      <g stroke="#d8e4d0" strokeWidth="1">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={102 * (i + 1)} y1="0" x2={102 * (i + 1)} y2="480" />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={96 * (i + 1)} x2="1120" y2={96 * (i + 1)} />
        ))}
      </g>
      <circle cx="340" cy="240" r="42" fill="#c4dfb6" />
      <circle cx="770" cy="280" r="52" fill="#c4dfb6" />
      <circle cx="560" cy="240" r="24" fill="#222222" />
      <path d="M551 245v-8l9-6 9 6v8h-6v-5h-6v5z" fill="#ffffff" />
    </svg>
  );
}

export default function LocationSection() {
  const { listing } = useListing();
  const [zoom, setZoom] = useState(1);
  const [more, setMore] = useState(false);
  if (!listing) return null;
  return (
    <section id="location" className="scroll-mt-20 border-t border-line py-12" aria-label="Location">
      <h2 className="text-[22px] font-semibold leading-[28px]">Where you'll be</h2>
      <p className="mt-4 text-[16px]">{listing.location.title}</p>
      <div className="relative mt-6 overflow-hidden rounded-xl">
        <div style={{ transform: `scale(${zoom})`, transition: 'transform 300ms ease' }}>
          <MapArt />
        </div>
        <button type="button" aria-label="Search this area" className="icon-btn absolute left-4 top-4 h-10 w-10 bg-white shadow-float">
          <SearchIcon size={14} className="text-ink" />
        </button>
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button type="button" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(2, z + 0.25))} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[20px] shadow-float transition-colors hover:bg-surface">
            +
          </button>
          <button type="button" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(0.75, z - 0.25))} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[20px] shadow-float transition-colors hover:bg-surface">
            −
          </button>
        </div>
      </div>
      <p className="mt-4 text-[15px] text-body">{listing.location.exactNote}</p>
      <h3 className="mt-8 text-[18px] font-semibold">{listing.location.highlightsTitle}</h3>
      <p className={`mt-3 text-[15px] leading-[24px] text-body ${more ? '' : 'line-clamp-1'}`}>
        {listing.location.highlightsText} {more ? listing.location.highlightsMore : ''}
      </p>
      <button type="button" onClick={() => setMore((v) => !v)} className="mt-3 flex items-center gap-1 text-[15px] font-semibold underline-link">
        {more ? 'Show less' : 'Show more'}
        <ChevronRightIcon size={12} />
      </button>
    </section>
  );
}
