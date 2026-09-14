import { useListing } from '../context/ListingContext';
import Modal from './Modal';
import { StarIcon } from './Icons';
import { assetUrl } from '../api/client';

export default function ReviewsModal({ onClose }) {
  const { listing } = useListing();
  if (!listing) return null;
  return (
    <Modal onClose={onClose} labelledBy="reviews-title">
      <h2 id="reviews-title" className="flex items-center gap-2 text-[20px] font-semibold">
        <StarIcon size={16} /> {listing.rating} · {listing.reviewsCount} reviews
      </h2>
      <div className="mt-6 space-y-10">
        {listing.reviews.map((r) => (
          <article key={r.name}>
            <div className="flex items-center gap-3">
              {r.avatar ? (
                <img src={assetUrl(r.avatar)} alt="" className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0d9c8] font-semibold text-[#8a5a44]">{r.initial}</span>
              )}
              <div>
                <div className="text-[15px] font-semibold">{r.name}</div>
                <div className="text-[14px] text-muted">{r.tenure}</div>
              </div>
            </div>
            <div className="mt-2 text-[14px] text-muted">
              {'★'.repeat(r.rating)} · {r.date}
            </div>
            <p className="mt-2 whitespace-pre-line text-[15px] leading-[22px] text-body">{r.text}</p>
          </article>
        ))}
      </div>
    </Modal>
  );
}
