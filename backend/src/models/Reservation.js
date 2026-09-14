const mongoose = require('mongoose');

const { Schema } = mongoose;

const reservationSchema = new Schema({
  listing: { type: Schema.Types.ObjectId, ref: 'Listing', required: true },
  checkIn: { type: Date, required: true },
  checkout: { type: Date, required: true },
  guests: { type: Number, required: true, min: 1, max: 3 },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
}, { timestamps: true });

reservationSchema.index({ listing: 1, checkIn: 1, checkout: 1 });

module.exports = mongoose.model('Reservation', reservationSchema);
