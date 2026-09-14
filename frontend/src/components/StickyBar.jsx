import { useEffect, useState } from 'react';
import { useListing } from '../context/ListingContext';
import { StarIcon } from './Icons';

const SECTIONS = [
  { label: 'Photos', id: 'photos' },
  { label: 'Amenities', id: 'amenities' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Location', id: 'location' }
];

export default function StickyBar() {
  const { listing } = useListing();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('Photos');

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 560);
      let current = 'Photos';
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.label;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!listing) return null;

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-4">
        <nav aria-label="Listing sections">
          <ul className="flex items-center gap-8">
            {SECTIONS.map((s) => (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  className={`border-b-2 px-1 pb-1 pt-5 text-[15px] font-semibold transition-colors ${active === s.label ? 'border-ink text-ink' : 'border-transparent text-muted hover:text-ink'}`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="text-right leading-tight">
            <span className="text-[15px] font-semibold">
              {listing.pricing.total} <span className="font-normal">for 5 nights</span>
            </span>
            <span className="ml-2 inline-flex items-center gap-1 text-[13px] font-normal text-muted">
              <StarIcon size={10} /> {listing.rating} · {listing.reviewsCount} reviews
            </span>
          </div>
          <button type="button" className="reserve-gradient rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-95">
            {listing.pricing.reserveLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
