import { useListing } from '../context/ListingContext';
import { assetUrl } from '../api/client';

export default function SleepSection() {
  const { listing } = useListing();
  if (!listing) return null;
  return (
    <section className="border-b border-line py-8" aria-label="Where you'll sleep">
      <h2 className="text-[22px] font-semibold leading-[28px]">Where you’ll sleep</h2>
      <div className="mt-6 flex gap-5">
        {listing.sleep.map((s) => (
          <div key={s.title} className="w-[316px]">
            <div className="overflow-hidden rounded-xl border border-line">
              <img src={assetUrl(listing.photos[s.photoIndex]?.url)} alt={s.title} className="h-[210px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]" />
            </div>
            <div className="mt-3 text-[16px] font-semibold">{s.title}</div>
            <div className="mt-0.5 text-[15px] text-muted">{s.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
