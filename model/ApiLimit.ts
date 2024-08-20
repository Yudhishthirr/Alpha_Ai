import mongoose,{Schema,Document} from "mongoose";



export interface ApiLimt extends Document{
    userId:string;
    count:number;
}


const ApiLimitSchema:Schema<ApiLimt> = new Schema({
    userId:{
        type:String,
        required:[true,"userId is requerid"],
        trim:true,
        unique:true
    },
    count:{
        type:Number,
        default:0
    }
    
})

const ApiLimtModel = (mongoose.models.ApiLimt as mongoose.Model<ApiLimt>) || mongoose.model<ApiLimt>("ApiLimt",ApiLimitSchema)
// (mongoose.models.User as mongoose.Model<User>) if our schema is already esites in db
// mongoose.model<User>("User",UserSchema) create a new schema 

// export UserModel; 
export default ApiLimtModel; 