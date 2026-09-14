const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const listingService = require('../services/listingService');

const getListing = asyncHandler(async (req, res) => {
  const data = await listingService.getListingDetail(req.params.id);
  res.json(new ApiResponse(200, data));
});

const getPhotoTour = asyncHandler(async (req, res) => {
  const data = await listingService.getPhotoTour(req.params.id);
  res.json(new ApiResponse(200, data));
});

const getReviews = asyncHandler(async (req, res) => {
  const data = await listingService.getReviews(req.params.id);
  res.json(new ApiResponse(200, data));
});

const getSimilarStays = asyncHandler(async (req, res) => {
  const data = await listingService.getSimilarStays(req.params.id);
  res.json(new ApiResponse(200, data));
});

module.exports = { getListing, getPhotoTour, getReviews, getSimilarStays };
