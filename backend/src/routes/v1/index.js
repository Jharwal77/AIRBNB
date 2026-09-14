const router = require('express').Router();
const mongoose = require('mongoose');
const listingRoutes = require('./listingRoutes');
const reservationRoutes = require('./reservationRoutes');

router.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'airbnb-clone-api',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    uptime: process.uptime()
  });
});

router.use('/listings', listingRoutes);
router.use('/listings', reservationRoutes);

module.exports = router;
