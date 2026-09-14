import { useState } from 'react';
import { useListing } from '../context/ListingContext';
import { StarIcon, CategoryIcon } from './Icons';
import { assetUrl } from '../api/client';
import ReviewsModal from './ReviewsModal';

function RatingBars() {
  return (
    <div className="flex items-stretch gap-2" aria-label="Overall rating distribution">
      <div className="flex h-[46px] flex-col justify-between text-right text-[11px] leading-none text-muted">
        {[5, 4, 3, 2, 1].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <div className="flex h-[46px] w-[110px] flex-col justify-between">
        <span className="h-[4px] w-full rounded-full bg-ink" />
        <span className="h-[2px] w-full rounded-full bg-[#dcdcdc]" />
        <span className="h-[2px] w-full rounded-full bg-[#dcdcdc]" />
        <span className="h-[2px] w-full rounded-full bg-[#dcdcdc]" />
        <span className="h-[2px] w-full rounded-full bg-[#dcdcdc]" />
      </div>
    </div>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > 260;
  const paragraphs = review.text.split('\n\n');
  return (
    <article>
      <div className="flex items-center gap-3">
        {review.avatar ? (
          <img src={assetUrl(review.avatar)} alt="" className="h-[42px] w-[42px] rounded-full object-cover" />
        ) : (
          <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f0d9c8] text-[16px] font-semibold text-[#8a5a44]">{review.initial}</span>
        )}
        <div>
          <div className="text-[15px] font-semibold">{review.name}</div>
          <div className="text-[14px] text-muted">{review.tenure}</div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[14px]">
        <span className="flex gap-px" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <StarIcon key={i} size={10} />
          ))}
        </span>
        <span className="text-muted">· {review.date}</span>
      </div>
      <div className={`mt-3 space-y-3 text-[15px] leading-[22px] text-body ${long && !expanded ? 'line-clamp-4' : ''}`}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {long && (
        <button type="button" onClick={() => setExpanded((v) => !v)} className="mt-2 text-[15px] font-semibold underline-link">
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </article>
  );
}

export default function ReviewsSection() {
  const { listing } = useListing();
  const [open, setOpen] = useState(false);
  if (!listing) return null;
  return (
    <section id="reviews" className="scroll-mt-20 py-12" aria-label="Reviews">
      <div className="text-center">
        <div className="text-[56px] font-bold leading-[64px] tracking-[-1px]">{listing.rating}</div>
        <div className="mt-2 text-[20px] font-semibold">Guest favourite</div>
        <p className="mx-auto mt-3 max-w-[420px] text-[15px] text-body">{listing.guestFavouriteBlurbLong}</p>
        <button type="button" className="mt-3 text-[14px] underline-link">
          {listing.howReviewsWork}
        </button>
      </div>
      <div className="mt-12 grid grid-cols-7 divide-x divide-line">
        <div className="flex flex-col items-start justify-between px-6 first:pl-0">
          <div className="text-[14px] font-semibold">Overall rating</div>
          <RatingBars />
        </div>
        {listing.ratingBreakdown.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-6 px-6">
            <div className="text-[14px] font-semibold">{c.name}</div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[15px] font-semibold">{c.score}</span>
              <CategoryIcon name={c.icon} size={22} />
            </div>
          </div>
        ))}
      </div>
      <div className="no-scrollbar mt-10 flex gap-3 overflow-x-hidden">
        {listing.reviewChips.map((chip) => (
          <button key={chip.label} type="button" className="flex shrink-0 items-center gap-2 rounded-xl border border-line px-5 py-3 text-[14px] font-semibold transition-colors hover:bg-surface">
            {chip.label}
            <span className="font-normal text-muted">{chip.count}</span>
          </button>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-24 gap-y-12">
        {listing.reviews.slice(0, 6).map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>
      <button type="button" onClick={() => setOpen(true)} className="pill-btn mt-12">
        Show all {listing.reviewsCount} reviews
      </button>
      {open && <ReviewsModal onClose={() => setOpen(false)} />}
    </section>
  );
}
