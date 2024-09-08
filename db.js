import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const connectDB = async function() {
    mongoose.connect(process.env.mongoDB);
}

export default connectDB;