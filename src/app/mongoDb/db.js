import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // Retrieve connection string from environment variable

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then((mongoose) => {
        console.log('MongoDB database connection established successfully');
        return mongoose;
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;