import client from './client';

function withGroups(listing) {
  const groups = [];

  listing.photos.forEach((photo, index) => {
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
    photoGroups: groups,
    heroPhotos: listing.heroPhotoIndexes.map((i) => ({
      index: i,
      ...listing.photos[i]
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