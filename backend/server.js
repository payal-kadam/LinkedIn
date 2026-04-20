import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
// import Post from "./models/post.model.js";
dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);

app.use(express.static("uploads"));

import Post from "./models/post.model.js"; // make sure this is added

// app.get("/fix-likes", async (req, res) => {
//   try {
//     const posts = await Post.find();

//     for (let post of posts) {
//       post.likes = parseInt(post.likes) || 0; // 🔥 convert string → number
//       await post.save();
//     }

//     res.send("Likes fixed successfully");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });
// app.get("/reset-likes", async (req, res) => {
//   try {
//     await Post.updateMany({}, { $set: { likes: 0 } });
//     res.send("All likes reset to 0");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

const start =async() =>{
     const connectDB =await mongoose.connect("mongodb://127.0.0.1:27017/linkedin_clone")
     app.listen(9080,()=>{
        console.log("Server is running on port 9080")
     })
}
start();