import express from "express";
import cors from "cors"
import cookieParserb from "cookie-parser"

const app=express(); 
//use are used mostly in middlewares
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
} 
))

app.use(express.json({limit:"16Kb"}))
app.use(express.urlencoded({extended: true ,limit:"16Kb"}))
app.use(express.static("public"))  
app.use(cookieParser())

export {app};//course is used when ahy middleware or any otther configutation setting 