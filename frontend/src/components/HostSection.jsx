import { useListing } from '../context/ListingContext';
import { assetUrl } from '../api/client';
import { VerifiedIcon, MedalIcon, GradIcon, ShieldIcon } from './Icons';

export default function HostSection() {
  const { listing } = useListing();
  if (!listing) return null;
  const h = listing.host;
  return (
    <section className="border-t border-line py-12" aria-label="Meet your host">
      <h2 className="text-[22px] font-semibold leading-[28px]">Meet your host</h2>
      <div className="mt-8 grid grid-cols-[330px_1fr] gap-16">
        <div>
          <div className="grid grid-cols-[1fr_110px] rounded-xl bg-white px-6 py-8 shadow-panel">
            <div className="flex flex-col items-center justify-center gap-3 pr-6 text-center">
              <VerifiedIcon size={22} />
              <div className="text-[24px] font-semibold leading-[32px]">
                {h.name.split(' ')[0]}
                <br />
                {h.name.split(' ').slice(1).join(' ')}
              </div>
              <div className="text-[13px] text-body">{h.role}</div>
            </div>
            <div className="space-y-4 border-l border-line pl-6">
              <div>
                <div className="text-[18px] font-semibold">{h.reviews}</div>
                <div className="text-[13px] text-body">Reviews</div>
              </div>
              <div className="border-t border-line pt-4">
                <div className="text-[18px] font-semibold">{h.rating}★</div>
                <div className="text-[13px] text-body">Rating</div>
              </div>
              <div className="border-t border-line pt-4">
                <div className="text-[18px] font-semibold">{h.years}</div>
                <div className="text-[13px] text-body">Years hosting</div>
              </div>
            </div>
          </div>
          <ul className="mt-8 space-y-5">
            <li className="flex items-center gap-4 text-[15px]">
              <MedalIcon size={22} />
              {h.born}
            </li>
            <li className="flex items-center gap-4 text-[15px]">
              <GradIcon size={22} />
              {h.school}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[18px] font-semibold">Co-Hosts</h3>
          <ul className="mt-6 grid grid-cols-3 gap-x-8 gap-y-6">
            {listing.coHosts.map((c) => (
              <li key={c.name} className="flex items-center gap-3">
                {c.avatar ? (
                  <img src={assetUrl(c.avatar)} alt="" className="h-[34px] w-[34px] rounded-full object-cover" />
                ) : (
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#dbeafe] text-[14px] font-semibold text-[#1d4ed8]">{c.initial}</span>
                )}
                <span className="text-[15px]">{c.name}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 text-[18px] font-semibold">Host details</h3>
          <div className="mt-4 space-y-1 text-[15px] text-body">
            <div>{h.responseRate}</div>
            <div>{h.responseTime}</div>
          </div>
          <button type="button" className="mt-6 rounded-lg bg-surface px-6 py-3 text-[15px] font-semibold transition-colors hover:bg-line">
            {h.messageCta}
          </button>
          <div className="mt-8 flex items-start gap-4">
            <ShieldIcon size={22} className="shrink-0" />
            <p className="text-[13px] text-muted">{h.protection}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
