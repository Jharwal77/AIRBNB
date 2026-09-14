const Reservation = require('../models/Reservation');
const ApiError = require('../utils/ApiError');
const { getListingDetail } = require('./listingService');

async function createReservation(listingId, payload) {
  const listing = await getListingDetail(listingId);
  const { checkIn, checkout, guests } = payload;
  if (!checkIn || !checkout) throw new ApiError(422, 'checkIn and checkout are required');
  const start = new Date(checkIn);
  const end = new Date(checkout);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) throw new ApiError(422, 'Invalid dates');
  if (end <= start) throw new ApiError(422, 'Checkout must be after check-in');
  const nights = Math.round((end - start) / 86400000);
  const reservation = await Reservation.create({ listing: listing._id, checkIn: start, checkout: end, guests: guests || 2 });
  return { reservation, nights, priceLabel: listing.pricing.total };
}

module.exports = { createReservation };
