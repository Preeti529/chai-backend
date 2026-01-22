// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
// import connectDB from "./db/index.js";
// import dotenv from "dotenv"; 
// import connectDB from "./db/index.js"; 

// // dotenv.config({
// // })
// // console.log(process.env.PORT);
// // import dotenv from "dotenv";
// dotenv.config();

// console.log("Server running on", process.env.PORT);

// connectDB(); 
// console.log("ENV CHECK:", process.env.MONGODB_URI);



//  import express from "express";
//  const app=express();
// (async ()=>{
//    try{
//      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//      app.on("error",(error)=>{
//        console.log("ERRR",error);
//        throw error
//      })

//   app.listen(process.env.PORT,()=>{
//        console.log(`App is listening on port ${process.env.PORT}`);
// })
//  }
//  catch(error){
//      console.error("ERROR",error)
//        throw error
//  }

//   })()


// import dotenv from "dotenv";
// import connectDB from "./db/index.js";

// // dotenv.config({
// //     path:'./env'
// // })
// console.log("MONGO URI =", process.env.MONGODB_URI);

// connectDB();

// console.log("Server running on", PORT);

import dotenv from "dotenv";
dotenv.config();
console.log("MONGO URI:", process.env.MONGODB_URI);
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is runnign at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed",err ); 
})

