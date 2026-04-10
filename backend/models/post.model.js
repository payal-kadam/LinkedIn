import mongoose from "mongoose";

const PostSchema =mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    body:{
        type:String,
        required:true

    },
    likes:{
        type:String,
        default:0
    },
    createdAt:{
        type:Date,
        default:0
    },
    updateAt:{
        type:Date,
        default:Date.now
    },
    media:{
        type:String,
        default:''
    },
    active:{
        type:Boolean,
        default:true
    },
    filetype:{
         type:String,
        default:''
    },
    

});

const Post = mongoose.model("Post",PostSchema)

export default Post;