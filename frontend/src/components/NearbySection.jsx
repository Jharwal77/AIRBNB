import { useState } from 'react';
import { useListing } from '../context/ListingContext';
import { assetUrl } from '../api/client';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

const PER_PAGE = 5;

export default function NearbySection() {
  const { listing } = useListing();
  const [page, setPage] = useState(0);
  if (!listing) return null;
  const pages = Math.ceil(listing.similarStays.length / PER_PAGE);
  return (
    <section className="border-t border-line py-12" aria-label="More stays nearby">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-semibold leading-[28px]">More stays nearby</h2>
        <div className="flex items-center gap-4">
          <span className="text-[14px] text-muted">
            {page + 1} / {pages}
          </span>
          <button type="button" aria-label="Previous stays" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))} className="icon-btn h-10 w-10 border border-line bg-white disabled:text-disabled disabled:hover:bg-white">
            <ChevronLeftIcon size={13} />
          </button>
          <button type="button" aria-label="Next stays" disabled={page === pages - 1} onClick={() => setPage((p) => Math.min(pages - 1, p + 1))} className="icon-btn h-10 w-10 border border-line bg-white disabled:text-disabled disabled:hover:bg-white">
            <ChevronRightIcon size={13} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-out" style={{ transform: `translateX(-${page * 100}%)` }}>
          {Array.from({ length: pages }).map((_, pi) => (
            <div key={pi} className="grid w-full shrink-0 grid-cols-5 gap-6">
              {listing.similarStays.slice(pi * PER_PAGE, pi * PER_PAGE + PER_PAGE).map((s) => (
                <article key={s.title} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img src={assetUrl(s.image)} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-[15px] font-semibold leading-[20px]">{s.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[14px]">
                    <span className="font-semibold">{s.price}</span>
                    <StarIcon size={10} />
                    <span>{s.rating}</span>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
