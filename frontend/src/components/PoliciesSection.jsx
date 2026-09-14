import { useListing } from '../context/ListingContext';
import { CalendarXIcon, KeyIcon, ShieldIcon } from './Icons';

const ICONS = { calendar: CalendarXIcon, key: KeyIcon, shield: ShieldIcon };

export default function PoliciesSection() {
  const { listing } = useListing();
  if (!listing) return null;
  return (
    <section className="border-t border-line py-12" aria-label="Things to know">
      <h2 className="text-[22px] font-semibold leading-[28px]">Things to know</h2>
      <div className="mt-8 grid grid-cols-3 gap-16">
        {listing.policies.map((p) => {
          const Icon = ICONS[p.icon] || ShieldIcon;
          return (
            <div key={p.title}>
              <Icon size={24} />
              <h3 className="mt-5 text-[16px] font-semibold">{p.title}</h3>
              <div className="mt-4 space-y-3">
                {p.lines.map((line) => (
                  <p key={line} className="text-[15px] leading-[22px] text-body">
                    {line}
                  </p>
                ))}
              </div>
              <button type="button" className="mt-4 text-[15px] font-semibold underline-link">
                {p.more}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
