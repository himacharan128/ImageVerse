import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, Configuration,OpenAIApi } from "openai";
import Post from '../mongodb/models/post.js';

dotenv.config();
const router=express.Router();

const Configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai=new OpenAIApi(Configuration);

router.route('/').get((req,res)=>{
    res.send("hello from imageVerse");
});

export default router;