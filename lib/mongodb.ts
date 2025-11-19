import mongoose from "mongoose";

const mongooseUrl = process.env.MONGO_URI

async function connectDb(){
    try{
        if(!mongooseUrl) throw new Error("mongo uri not found")
        const conn = await mongoose.connect(mongooseUrl)
        console.log("mongodb connected successfully...")
        return conn
    }catch(error){
        console.log(error)
        return null
    }
}

export default connectDb
