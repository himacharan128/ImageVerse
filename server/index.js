import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js';
import imageverse from './routes/imageverse.js';

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json({limit : '50mb'}));
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/imageverse',imageverse);
app.get('/',async(req,res)=>{
    res.send("Hello..!, ImageVerse here");
}
)
const startServer = async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(3000,()=>console.log('click http://localhost:3000'))
    } catch(error){
        console.log(error);
    }
}
startServer();