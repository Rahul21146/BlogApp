//import model comment and post model

const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

//business logic;
exports.createComment= async (req,res)=>{
    try{
        //fetch data from req ki body se 
        const{post,user,body}=req.body;
        //create a comment
        const comment= new Comment(
            {
                post,
                user,
                body,
            }
        );

        //store into the databse
        const saveComment=await comment.save();

        //find post using id and ,a nd add the new comment int the comment array
        const updatedPost= await Post.findByIdAndUpdate(post,{$push: {comments:saveComment._id}}, {new: true}).populate("comments").exec();

        res.json({
            post:updatedPost
        })
    }
    catch{
        return res.status(500).json({
            error:"error while creating Comment"
        })
    }
}