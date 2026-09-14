import { useState } from 'react';
import { useListing } from '../context/ListingContext';
import { AmenityIcon } from './Icons';
import AmenitiesModal from './AmenitiesModal';

export default function AmenitiesSection() {
  const { listing } = useListing();
  const [open, setOpen] = useState(false);
  if (!listing) return null;
  return (
    <section id="amenities" className="scroll-mt-20 border-b border-line py-8" aria-label="Amenities">
      <h2 className="text-[22px] font-semibold leading-[28px]">What this place offers</h2>
      <ul className="mt-7 grid grid-cols-2 gap-x-8 gap-y-7">
        {listing.amenitiesFeatured.map((a) => (
          <li key={a.name} className={`flex items-center gap-5 ${a.available ? '' : 'text-muted line-through'}`}>
            <AmenityIcon name={a.icon} size={24} className={a.available ? '' : 'opacity-70'} />
            <span className="text-[16px]">{a.name}</span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setOpen(true)} className="pill-btn mt-8">
        Show all {listing.amenitiesTotal} amenities
      </button>
      {open && <AmenitiesModal onClose={() => setOpen(false)} />}
    </section>
  );
}
