import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const GalleryContext = createContext(null);

export function GalleryProvider({ children }) {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openTour = useCallback(() => setTourOpen(true), []);
  const closeTour = useCallback(() => {
    setTourOpen(false);
    setLightboxIndex(null);
  }, []);
  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const value = useMemo(
    () => ({ tourOpen, lightboxIndex, openTour, closeTour, openLightbox, closeLightbox }),
    [tourOpen, lightboxIndex, openTour, closeTour, openLightbox, closeLightbox]
  );
  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}

export function useGallery() {
  return useContext(GalleryContext);
}
