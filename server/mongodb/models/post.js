import mongoose from "mongoose";
const Post=new mongoose.Schema({
    name:{typr:String, required: true},
    prompt:{typr:String, required: true},
    photo:{typr:String, required: true},
});

const PostSchema=mongoose.model('Post',Post);
export default PostSchema;