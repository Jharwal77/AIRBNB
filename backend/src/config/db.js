const mongoose = require('mongoose');

let memoryServer = null;

async function connectDB() {
  mongoose.set('strictQuery', true);
  let uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/airbnb_clone';
  if (process.env.USE_MEMORY_MONGO === 'true') {
    const { MongoMemoryServer } = require('mongodb-memory-server');
    memoryServer = await MongoMemoryServer.create();
    uri = memoryServer.getUri('airbnb_clone');
    console.log('Using in-memory MongoDB at', uri);
  }
  await mongoose.connect(uri);
  console.log('MongoDB connected');
  return mongoose.connection;
}

async function disconnectDB() {
  await mongoose.disconnect();
  if (memoryServer) await memoryServer.stop();
}

module.exports = { connectDB, disconnectDB };
