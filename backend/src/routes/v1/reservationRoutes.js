const router = require('express').Router();
const reservationController = require('../../controllers/reservationController');

router.route('/:id/reservations').post(reservationController.createReservation);

module.exports = router;
