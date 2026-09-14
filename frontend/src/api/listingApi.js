import client from './client';

const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || '';

function resolveImageUrl(url) {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;

  return `${API_ORIGIN}${url.startsWith('/') ? url : `/${url}`}`;
}

function withGroups(listing) {
  const groups = [];

  const photos = listing.photos.map((photo) => ({
    ...photo,
    url: resolveImageUrl(photo.url)
  }));

  photos.forEach((photo, index) => {
    let group = groups.find((g) => g.category === photo.category);

    if (!group) {
      group = {
        category: photo.category,
        caption: photo.caption,
        photos: []
      };

      groups.push(group);
    }

    group.photos.push({
      index,
      ...photo
    });
  });

  return {
    ...listing,
    photos,
    photoGroups: groups,
    heroPhotos: listing.heroPhotoIndexes.map((i) => ({
      index: i,
      ...photos[i]
    }))
  };
}

export async function fetchListing(id) {
  const { data } = await client.get(`/listings/${id}`);

  return {
    listing: withGroups(data.data),
    source: 'api'
  };
}

export async function postReservation(id, payload) {
  return client.post(`/listings/${id}/reservations`, payload);
}