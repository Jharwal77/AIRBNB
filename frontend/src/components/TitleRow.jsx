import { useListing } from '../context/ListingContext';
import { ShareIcon, HeartIcon } from './Icons';

export default function TitleRow() {
  const { listing } = useListing();
  if (!listing) return null;
  return (
    <div className="mx-auto flex max-w-site items-end justify-between pt-10">
      <h1 className="text-[26px] font-semibold leading-[32px] tracking-[-0.2px]">{listing.title}</h1>
      <div className="flex items-center gap-1 pb-0.5">
        <button type="button" className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold underline-link transition-colors hover:bg-surface">
          <ShareIcon size={16} />
          Share
        </button>
        <button type="button" className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold underline-link transition-colors hover:bg-surface">
          <HeartIcon size={16} />
          Save
        </button>
      </div>
    </div>
  );
}
