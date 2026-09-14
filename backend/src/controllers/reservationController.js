const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const reservationService = require('../services/reservationService');

const createReservation = asyncHandler(async (req, res) => {
  const data = await reservationService.createReservation(req.params.id, req.body);
  res.status(201).json(new ApiResponse(201, data, 'Reservation created'));
});

module.exports = { createReservation };
