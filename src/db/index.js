//  import mongoose from "mongoose";
// import{DB_NAME} from "../constants.js";
// // import connectDB from "./db";

// const connectDB=async()=>{
//     try{
//        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{
//        useNewUrlParser:true,
//          useUnifiedTopology:true,
//        });
//        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
//     }catch(error){
//         console.log("MONGODB CONNECTION ERROR",error);
//         process.exit(1);
//     }
// }

// export default connectDB;



// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MONGODB CONNECTION ERROR", error);
//     process.exit(1);
//   }
// };

// export default connectDB;



// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     const url = process.env.MONGODB_URL;
//     const dbName = process.env.DB_NAME;

//     console.log('MONGODB_URL =', url); // debug: ensure this prints a valid URI

//     // Option 1: pass dbName separately (good for mongodb+srv too)
//     await mongoose.connect(url, {
//       dbName: dbName,
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     console.log('MongoDB connected. Host:', mongoose.connection.host);
//   } catch (error) {
//     console.error('MONGODB CONNECTION ERROR', error);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";  
import {DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR", error.message);
    process.exit(1);
  }
};

export default connectDB;
