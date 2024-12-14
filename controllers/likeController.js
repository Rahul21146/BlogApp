const Like=require("../models/likeModel");
const Post=require("../models/postModel");

exports.dummyLink=(req,res)=>{
    res.send("this is dummy page");
}

exports.createLike=async (req,res)=>{
    try{
        const {post,user}=req.body;

        const  like=new Like({
            post,
            user,
        });

        const savedLike=await like.save();

        const updatedLike= await Post.findByIdAndUpdate(post,{$push: {likes:savedLike._id}}, {new: true}).populate("likes").exec();

        res.json({
            post:updatedLike
        });
    }
    catch{
        return res.status(500).json({
            error:"error while liking post"
        });
    }
}

exports.unlikePost=async (req,res)=>{
    try{
        const {post,user}=req.body;

        const  like=new Like({
            post,
            user,
        });

        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost= await Post.findByIdAndUpdate(post,{$pull: {likes:deletedLike._id}}, {new: true});

        res.json({
            post:updatedPost
        });
    }
    catch{
        return res.status(500).json({
            error:"error while unliking post"
        });
    }
}

