import { ListingProvider, useListing } from './context/ListingContext';
import { GalleryProvider, useGallery } from './context/GalleryContext';
import Header from './components/Header';
import StickyBar from './components/StickyBar';
import TitleRow from './components/TitleRow';
import HeroGrid from './components/HeroGrid';
import OverviewSection from './components/OverviewSection';
import SleepSection from './components/SleepSection';
import AmenitiesSection from './components/AmenitiesSection';
import CalendarSection from './components/CalendarSection';
import BookingPanel from './components/BookingPanel';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import HostSection from './components/HostSection';
import PoliciesSection from './components/PoliciesSection';
import NearbySection from './components/NearbySection';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';

function Page() {
  const { listing } = useListing();
  const { tourOpen, lightboxIndex } = useGallery();

  if (!listing) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-rausch" aria-label="Loading listing" />
      </div>
    );
  }

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-card">
        Skip to content
      </a>
      <Header />
      <StickyBar />
      <main id="main">
        <TitleRow />
        <HeroGrid />
        <div className="mx-auto grid max-w-site grid-cols-[1fr_370px] gap-x-24 pb-4 pt-14">
          <div className="min-w-0">
            <OverviewSection />
            <SleepSection />
            <AmenitiesSection />
            <CalendarSection />
          </div>
          <div className="self-start">
            <div className="sticky top-24">
              <BookingPanel />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-site border-t border-line">
          <ReviewsSection />
          <LocationSection />
          <HostSection />
          <PoliciesSection />
          <NearbySection />
        </div>
      </main>
      {tourOpen && <PhotoTour />}
      {lightboxIndex !== null && <Lightbox />}
    </>
  );
}

export default function App() {
  return (
    <ListingProvider>
      <GalleryProvider>
        <Page />
      </GalleryProvider>
    </ListingProvider>
  );
}
