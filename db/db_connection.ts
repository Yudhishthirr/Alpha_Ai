import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection:ConnectionObject={}

async function dbConnection():Promise<void>{
    //check if database connection is already stablish or not
    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }else
    {
        try {
            const db = await mongoose.connect(process.env.MONGODB_URI!)
            console.log(db)

            connection.isConnected=db.connections[0].readyState
            console.log("DB Connected SuccessFully");
        } catch (error) {
            console.log("MongoDB Connection Failled",error)
            process.exit(1)
        }
    }
}

export default dbConnection;