import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const connectDB = async function() {
    // mongoose.connect(process.env.mongoDB);
    mongoose.connect("mongodb+srv://shivan:sunny123@cluster0.6zfyb.mongodb.net/blog");
}

export default connectDB;
