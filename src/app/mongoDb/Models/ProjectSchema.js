import mongoose from "mongoose";

const {Schema} = mongoose;

const ProjectSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true,
    }
},{timestamps:true})

export default mongoose.model(("Project",ProjectSchema))