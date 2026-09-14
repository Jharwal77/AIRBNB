require('dotenv').config();
const { connectDB, disconnectDB } = require('../config/db');
const Listing = require('../models/Listing');
const data = require('./data/listingData.json');

async function run() {
  await connectDB();
  await Listing.deleteMany({});
  const listing = await Listing.create(data);
  console.log('Seeded listing:', listing.slug, listing._id);
  await disconnectDB();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
