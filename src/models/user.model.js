 import mongoose,{schema} from "mongoose";
 import jwt from "jsonwebtoken"
 import bcrypt from "bcrypt"

 const userSchema=new Schema({
    username :{
    type:String,
    required:true,
    unique:true,
    trim:true,
    index:true, //make sarching easier
    },
    
    email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    },
    fullname:{
    type:String,
    required:true,
      trim:true,
    },
    avatar:{
      type:string, //cloudiary url
       required:true,
    },
    coverImage:{
      type:string,
    },
    watchHistory:[
      {
      type:schema.types.ObjectId,
      ref:"video"
    }
   ],
   passward:{
      type:string,
      required:[true,'passward is required']
   }
 })

userSchema.pre("save",async function(next){
   //these function is used to change only when the passwaed is set or updated
   if(!this.ismodified("passward"))
      return next()

   //this will change the paasward everytime you hover on above proprties 
   this.passward=bcrypt.hash(this.passward,10)
      next()
   
})
//this function is used to comapare two pasward user and encrypted
userSchema.methods.isPasswardCorrect=async function(passward){
   return await bcrypt.compare(passward,this.passward)
}
 userSchema.methods.generateAccessToken=function(){
jwt.sign({
   _id:this._id,
   email:this.email,
   username:this.username,
   fullname:this.fullname,
}
,
process.env.ACCESS_TOKEN_SECRET,
{
   expitrsIn:process.env.ACCESS_TOKEN_EXPIRY
})
 }

 userSchema.methods.generateRefreshToken=function(){
jwt.sign({
   _id:this._id,
   email:this.email,
   username:this.username,
   fullname:this.fullname,
}
,
process.env.REFRESH_TOKEN_SECRET,
{
   expitrsIn:process.env.REFRESH_TOKEN_EXPIRY
})
 } 
 export const User=mongoose.model("User",userSchema)