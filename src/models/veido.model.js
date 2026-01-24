import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchmea=new Schema(
    {
        videofile:{
            type:String,
            required:true,
        },
        
        thumbnail:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        veiws:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Schema.Types.Objectid,
            ref:"User"
        },
        duration:{
            type:Number,
            required:true,
        }

    },
    {
    timestamps : true
    }
)
video.plugin(mongooseAggregatePaginate)  //plugin is a type of hook that are run in specific time
