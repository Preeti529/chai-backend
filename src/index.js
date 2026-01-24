
import dotenv from "dotenv";
dotenv.config();
console.log("ENV CHECK:", process.env.MONGODB_URI);
   // NO custom path now

import connectDB from "./db/index.js";
import app from "./app.js";
const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed!", err);
  });