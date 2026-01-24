

import mongoose from 'mongoose';

const connectDB = async (mongoUri) => {
  try {
    const connectionInstance = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
    return connectionInstance;
  } 
  catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;  // ← This line is crucial!
// await mongoose.connect(process.env.MONGODB_URI);
