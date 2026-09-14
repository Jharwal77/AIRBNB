import { useListing } from '../context/ListingContext';
import Modal from './Modal';
import { AmenityIcon, CheckCircleIcon } from './Icons';

export default function AmenitiesModal({ onClose }) {
  const { listing } = useListing();
  if (!listing) return null;
  return (
    <Modal onClose={onClose} labelledBy="amenities-title">
      <h2 id="amenities-title" className="text-[20px] font-semibold">
        What this place offers
      </h2>
      <div className="mt-6 space-y-8">
        {listing.amenityGroups.map((group) => (
          <section key={group.title}>
            <h3 className="text-[16px] font-semibold">{group.title}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-5">
              {group.items.map((item) => (
                <li key={item.name} className={`flex items-center gap-4 ${item.available ? '' : 'text-muted line-through'}`}>
                  {item.available ? (
                    <CheckCircleIcon size={20} className="shrink-0" />
                  ) : (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-muted">✕</span>
                  )}
                  <span className="text-[15px]">{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Modal>
  );
}
