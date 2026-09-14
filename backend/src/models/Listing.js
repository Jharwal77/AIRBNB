const mongoose = require('mongoose');

const { Schema } = mongoose;

const photoSchema = new Schema({
  url: { type: String, required: true },
  category: { type: String, required: true },
  caption: { type: String, default: '' }
}, { _id: false });

const sleepSchema = new Schema({
  title: String,
  detail: String,
  photoIndex: Number
}, { _id: false });

const highlightSchema = new Schema({
  icon: String,
  title: String,
  text: String
}, { _id: false });

const amenityItemSchema = new Schema({
  name: String,
  icon: String,
  available: { type: Boolean, default: true }
}, { _id: false });

const amenityGroupSchema = new Schema({
  title: String,
  items: [amenityItemSchema]
}, { _id: false });

const staySchema = new Schema({
  nights: Number,
  label: String,
  rangeLabel: String,
  checkIn: String,
  checkout: String,
  months: [String]
}, { _id: false });

const pricingSchema = new Schema({
  total: String,
  forNights: String,
  promo: String,
  promoTerms: String,
  promoCta: String,
  freeCancellation: String,
  reserveLabel: String,
  reserveNote: String,
  reportLabel: String
}, { _id: false });

const bookingBoxSchema = new Schema({
  checkInLabel: String,
  checkInValue: String,
  checkoutLabel: String,
  checkoutValue: String,
  guestsLabel: String,
  guestsValue: String
}, { _id: false });

const ratingCategorySchema = new Schema({
  name: String,
  score: String,
  icon: String
}, { _id: false });

const reviewChipSchema = new Schema({
  label: String,
  count: Number,
  icon: String
}, { _id: false });

const reviewSchema = new Schema({
  name: String,
  avatar: String,
  initial: String,
  tenure: String,
  date: String,
  rating: Number,
  text: String
}, { _id: false });

const locationSchema = new Schema({
  title: String,
  exactNote: String,
  highlightsTitle: String,
  highlightsText: String,
  highlightsMore: String
}, { _id: false });

const hostSchema = new Schema({
  name: String,
  role: String,
  avatar: String,
  reviews: String,
  rating: String,
  years: String,
  yearsHostingLabel: String,
  born: String,
  school: String,
  verified: Boolean,
  responseRate: String,
  responseTime: String,
  messageCta: String,
  protection: String,
  hostedLine: String,
  hostingLine: String
}, { _id: false });

const coHostSchema = new Schema({
  name: String,
  avatar: String,
  initial: String
}, { _id: false });

const policySchema = new Schema({
  icon: String,
  title: String,
  lines: [String],
  more: String
}, { _id: false });

const similarStaySchema = new Schema({
  title: String,
  price: String,
  rating: String,
  image: String
}, { _id: false });

const listingSchema = new Schema({
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  documentTitle: String,
  typeLine: String,
  summaryLine: String,
  guestFavorite: Boolean,
  guestFavoriteBlurb: String,
  guestFavouriteBlurbLong: String,
  howReviewsWork: String,
  rating: Number,
  reviewsCount: Number,
  heroPhotoIndexes: [Number],
  photos: [photoSchema],
  sleep: [sleepSchema],
  highlights: [highlightSchema],
  translationNote: String,
  translationAction: String,
  description: String,
  descriptionMore: String,
  amenitiesFeatured: [amenityItemSchema],
  amenityGroups: [amenityGroupSchema],
  amenitiesTotal: Number,
  stay: staySchema,
  pricing: pricingSchema,
  bookingBox: bookingBoxSchema,
  ratingBreakdown: [ratingCategorySchema],
  reviewChips: [reviewChipSchema],
  reviews: [reviewSchema],
  location: locationSchema,
  host: hostSchema,
  coHosts: [coHostSchema],
  policies: [policySchema],
  similarStays: [similarStaySchema],
  nav: [String]
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
