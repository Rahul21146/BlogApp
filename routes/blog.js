const express=require("express");
const router=express.Router();

//import controller
const {dummyLink}=require("../controllers/likeController");
const {createComment}=require("../controllers/commentController");
const {createPost,getAllPost}=require("../controllers/postController");
const {createLike,unlikePost}=require("../controllers/likeController");

//mapping done
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPost);
router.post("/likes/like",createLike);
router.post("updatedPost",unlikePost);

//export
module.exports=router;