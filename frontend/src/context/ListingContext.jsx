import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchListing } from '../api/listingApi';

const ListingContext = createContext(null);

export function ListingProvider({ children }) {
  const [listing, setListing] = useState(null);
  const [source, setSource] = useState('loading');

  useEffect(() => {
    let alive = true;
    const id = import.meta.env.VITE_LISTING_ID || 'romantic-jacuzzi-1bhk-candolim-mirashya-ug10';
    fetchListing(id).then((res) => {
      if (!alive) return;
      setListing(res.listing);
      setSource(res.source);
      if (res.listing?.documentTitle) document.title = res.listing.documentTitle;
    });
    return () => {
      alive = false;
    };
  }, []);

  const value = useMemo(() => ({ listing, source }), [listing, source]);
  return <ListingContext.Provider value={value}>{children}</ListingContext.Provider>;
}

export function useListing() {
  return useContext(ListingContext);
}
