require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');
const Listing = require('./models/Listing');
const seedData = require('./seed/data/listingData.json');

const PORT = process.env.PORT || 5000;

connectDB().then(async () => {
  const count = await Listing.countDocuments();
  if (count === 0) {
    await Listing.create(seedData);
    console.log('Database empty - seeded default listing');
  }
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`API ready on http://localhost:${PORT}/api/v1`);
  });
}).catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});
