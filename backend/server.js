import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));
const start =async() =>{
     const connectDB =await mongoose.connect("mongodb://127.0.0.1:27017/linkedin_clone")
     app.listen(9080,()=>{
        console.log("Server is running on port 9080")
     })
}
start();