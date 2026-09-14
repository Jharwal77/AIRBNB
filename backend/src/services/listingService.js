const Listing = require('../models/Listing');
const ApiError = require('../utils/ApiError');

function groupPhotos(photos) {
  const groups = [];
  photos.forEach((photo, index) => {
    let group = groups.find((g) => g.category === photo.category);
    if (!group) {
      group = { category: photo.category, caption: photo.caption, photos: [] };
      groups.push(group);
    }
    group.photos.push({ index, url: photo.url, category: photo.category, caption: photo.caption });
  });
  return groups;
}

async function getListing(identifier) {
  const query = mongoose_isObjectId(identifier) ? { _id: identifier } : { slug: identifier };
  const listing = await Listing.findOne(query);
  if (!listing) throw new ApiError(404, 'Listing not found');
  return listing;
}

function mongoose_isObjectId(value) {
  return /^[0-9a-fA-F]{24}$/.test(value);
}

async function getListingDetail(identifier) {
  const listing = await getListing(identifier);
  const doc = listing.toObject();
  doc.photoGroups = groupPhotos(doc.photos);
  doc.heroPhotos = doc.heroPhotoIndexes.map((i) => ({ index: i, ...doc.photos[i] }));
  return doc;
}

async function getPhotoTour(identifier) {
  const listing = await getListing(identifier);
  const doc = listing.toObject();
  return { groups: groupPhotos(doc.photos), total: doc.photos.length };
}

async function getReviews(identifier) {
  const listing = await getListing(identifier);
  const doc = listing.toObject();
  return {
    rating: doc.rating,
    reviewsCount: doc.reviewsCount,
    guestFavorite: doc.guestFavorite,
    blurb: doc.guestFavouriteBlurbLong,
    breakdown: doc.ratingBreakdown,
    chips: doc.reviewChips,
    items: doc.reviews
  };
}

async function getSimilarStays(identifier) {
  const listing = await getListing(identifier);
  return listing.similarStays;
}

module.exports = { getListingDetail, getPhotoTour, getReviews, getSimilarStays };
