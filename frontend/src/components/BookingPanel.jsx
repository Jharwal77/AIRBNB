import { useListing } from '../context/ListingContext';
import { ChevronDownIcon, FlagIcon } from './Icons';

export default function BookingPanel() {
  const { listing } = useListing();

  if (!listing) return null;

  const b = listing.bookingBox;

  return (
    <aside
      className="w-[370px] shrink-0"
      aria-label="Booking summary"
    >
      <div className="flex items-center justify-between rounded-xl border border-line px-5 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/images/discount.svg"
            alt=""
            className="h-8 w-8"
          />

          <div className="text-[15px] leading-[20px]">
            <div>{listing.pricing.promo}</div>

            <button
              type="button"
              className="font-semibold underline-link"
            >
              {listing.pricing.promoTerms}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg bg-surface px-5 py-2 text-sm font-semibold transition-colors hover:bg-line"
        >
          {listing.pricing.promoCta}
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-edge bg-white p-6 shadow-panel">
        <div className="flex items-baseline gap-2">
          <span className="text-[22px] font-semibold underline-link">
            {listing.pricing.total}
          </span>

          <span className="text-[14px] text-body">
            {listing.pricing.forNights}
          </span>
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-edge">
          <div className="grid grid-cols-2">
            <div className="border-r border-edge px-4 py-2.5">
              <div className="text-[10px] font-semibold tracking-[0.6px] text-body">
                {b.checkInLabel}
              </div>

              <div className="mt-0.5 text-[14px] font-medium">
                {b.checkInValue}
              </div>
            </div>

            <div className="px-4 py-2.5">
              <div className="text-[10px] font-semibold tracking-[0.6px] text-body">
                {b.checkoutLabel}
              </div>

              <div className="mt-0.5 text-[14px] font-medium">
                {b.checkoutValue}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-between border-t border-edge px-4 py-2.5 text-left transition-colors hover:bg-surface/60"
          >
            <span>
              <span className="block text-[10px] font-semibold tracking-[0.6px] text-body">
                {b.guestsLabel}
              </span>

              <span className="mt-0.5 block text-[14px] font-medium">
                {b.guestsValue}
              </span>
            </span>

            <ChevronDownIcon
              size={12}
              className="text-muted"
            />
          </button>
        </div>

        <div className="mt-4 rounded-lg bg-surface py-2.5 text-center text-[14px] text-body">
          {listing.pricing.freeCancellation.split('17 October')[0]}
          <strong className="font-semibold text-ink">
            17 October
          </strong>
        </div>

        <button
          type="button"
          className="reserve-gradient mt-4 w-full rounded-lg py-3.5 text-[16px] font-semibold text-white transition-transform active:scale-[0.99]"
        >
          {listing.pricing.reserveLabel}
        </button>

        <p className="mt-4 text-center text-[14px] text-muted">
          {listing.pricing.reserveNote}
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="flex items-center gap-2 text-[14px] text-muted underline-link transition-colors hover:text-ink"
        >
          <FlagIcon size={14} />
          {listing.pricing.reportLabel}
        </button>
      </div>
    </aside>
  );
}