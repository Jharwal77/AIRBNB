import { useListing } from '../context/ListingContext';
import { assetUrl } from '../api/client';
import {
  StarIcon,
  OutdoorIcon,
  FanIcon,
  DoorIcon
} from './Icons';

const HIGHLIGHT_ICONS = {
  outdoor: OutdoorIcon,
  fan: FanIcon,
  door: DoorIcon
};

function GuestFavouriteBox({ listing }) {
  return (
    <div className="mt-8 flex items-center gap-5 rounded-xl border border-line px-5 py-5">
      <div className="flex shrink-0 items-center gap-1.5">
        <img
          src="/images/laurel-left.png"
          alt=""
          className="h-[55px] w-[34px]"
        />

        <span className="w-[72px] text-center text-[15px] font-semibold leading-[19px]">
          Guest
          <br />
          favourite
        </span>

        <img
          src="/images/laurel-right.png"
          alt=""
          className="h-[55px] w-[34px]"
        />
      </div>

      <p className="flex-1 pr-2 text-[15px] leading-[19px]">
        {listing.guestFavoriteBlurb}
      </p>

      <div className="flex items-center gap-5">
        <div className="text-center">
          <div className="text-[15px] font-semibold">
            {listing.rating}
          </div>

          <div
            className="mt-0.5 flex justify-center gap-0.5"
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                size={9}
              />
            ))}
          </div>
        </div>

        <span
          className="h-10 w-px bg-line"
          aria-hidden="true"
        />

        <div className="text-center">
          <div className="text-[15px] font-semibold">
            {listing.reviewsCount}
          </div>

          <div className="text-[13px]">
            Reviews
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OverviewSection() {
  const { listing } = useListing();

  if (!listing) return null;

  return (
    <section aria-label="Listing overview">
      <h2 className="text-[22px] font-semibold leading-[28px]">
        {listing.typeLine}
      </h2>

      <p className="mt-2 text-[15px] text-body">
        {listing.summaryLine}
      </p>

      <GuestFavouriteBox listing={listing} />

      <div className="mt-8 flex items-center gap-4 border-b border-line pb-8">
        <img
          src={assetUrl(listing.host.avatar)}
          alt=""
          className="h-[46px] w-[46px] rounded-full object-cover"
        />

        <div>
          <div className="text-[16px] font-semibold">
            {listing.host.hostedLine}
          </div>

          <div className="mt-0.5 text-[15px] text-muted">
            {listing.host.hostingLine}
          </div>
        </div>
      </div>

      <ul className="space-y-6 border-b border-line py-8">
        {listing.highlights.map((h) => {
          const Icon =
            HIGHLIGHT_ICONS[h.icon] || OutdoorIcon;

          return (
            <li
              key={h.title}
              className="flex items-start gap-5"
            >
              <span className="mt-0.5 shrink-0">
                <Icon size={26} />
              </span>

              <div>
                <div className="text-[16px] font-semibold">
                  {h.title}
                </div>

                <div className="mt-1 text-[15px] text-muted">
                  {h.text}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-b border-line py-8">
        <div className="flex items-center gap-2 rounded-xl bg-surface px-5 py-4 text-[14px]">
          <span>
            {listing.translationNote}
          </span>

          <button
            type="button"
            className="font-semibold underline-link"
          >
            {listing.translationAction}
          </button>
        </div>

        <p className="mt-6 text-[15px] leading-[26px] text-body">
          <span className="line-clamp-3">
            {listing.description}
          </span>
        </p>

        <button
          type="button"
          className="mt-4 flex items-center gap-2 text-[15px] font-semibold underline-link"
        >
          Show more
        </button>
      </div>
    </section>
  );
}