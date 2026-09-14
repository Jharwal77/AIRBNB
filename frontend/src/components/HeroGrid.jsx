import { useListing } from '../context/ListingContext';
import { useGallery } from '../context/GalleryContext';
import { assetUrl } from '../api/client';
import { GridIcon } from './Icons';

export default function HeroGrid() {
  const { listing } = useListing();
  const { openTour } = useGallery();
  if (!listing) return null;
  const photos = listing.heroPhotos;

  return (
    <div id="photos" className="relative mx-auto max-w-site scroll-mt-20 pt-6">
      <div className="grid h-[488px] grid-cols-4 grid-rows-2 gap-2">
        <button
          type="button"
          onClick={openTour}
          aria-label={`Open photo tour, ${photos[0]?.category}`}
          className="group relative row-span-2 col-span-2 overflow-hidden rounded-l-xl text-left"
        >
          <img src={assetUrl(photos[0]?.url)} alt={photos[0]?.category} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
        </button>
        {photos.slice(1).map((p, i) => (
          <button
            type="button"
            key={p.index}
            onClick={openTour}
            aria-label={`Open photo tour, ${p.category}`}
            className={`group relative overflow-hidden text-left ${i === 0 ? 'rounded-tr-xl' : ''} ${i === 3 ? 'rounded-br-xl' : ''}`}
          >
            <img src={assetUrl(p.url)} alt={p.category} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
          </button>
        ))}
        <button
          type="button"
          onClick={openTour}
          className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-3.5 py-[7px] text-[14px] font-semibold shadow-float transition-all hover:scale-[1.02] hover:bg-surface"
        >
          <GridIcon size={12} />
          Show all photos
        </button>
      </div>
    </div>
  );
}
