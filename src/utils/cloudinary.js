import { v2 as cloudinary } from 'cloudinary';

import fs from "fs";

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });


    //create a method to upload any file
    const uploadtocloudinary=async(localfilepath)=>{
        try{
            if(!localfilepath) return null;
            //upload file on cloudinary
            const response=await cloudinary.uploader.upload
            (localfilepath,{
             resource_type:"auto"

            })
            //file uploaded successfully
            console.log("file is uploaded on cloudinary",response.url);
            return response;


        }
        catch(error){
            fs.unlinkSync(localfilepath)
return null;

        }
    }
    export{uploadtocloudinary} 