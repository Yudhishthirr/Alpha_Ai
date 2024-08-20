import dbConnection from "@/db/db_connection";
import ApiLimtModel from "@/model/ApiLimit";
import { auth } from "@clerk/nextjs/server";
import mongoose from "mongoose";

export const getApiLimitCount  = async()=>{
    await dbConnection()
    return "Hello AI"
    // try {
    //     const {userId} = auth();
    //     if(!userId) return null

    //     const userApiLimt = await ApiLimtModel.findById(userId)
    //     if(!userApiLimt) return 0

    //     return userApiLimt

    // } catch (error) {
        
    // }
}

// export const IncrseUserApiLimit = async()=>{
//     await dbConnection()
//     try {
//         const {userId} = auth();
//         if(!userId) return null

//         const IncrseApiLimit = await ApiLimtModel.findByIdAndUpdate({_id:userId},{$set:{count:1}})
//         if(!IncrseApiLimit){
//             const createApiLimit = await ApiLimtModel.create({userId,count:0})
//         }
//     } catch (error) {
        
//     }
// }