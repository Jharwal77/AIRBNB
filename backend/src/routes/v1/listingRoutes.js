const router = require('express').Router();
const listingController = require('../../controllers/listingController');

router.route('/:id').get(listingController.getListing);
router.route('/:id/photos').get(listingController.getPhotoTour);
router.route('/:id/reviews').get(listingController.getReviews);
router.route('/:id/similar').get(listingController.getSimilarStays);

module.exports = router;
