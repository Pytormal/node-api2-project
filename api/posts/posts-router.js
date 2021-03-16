// implement your posts router here
const express = require("express");

const router = express.Router();
const Post = require("./posts-model");


// 1 [GET] /api/posts Completed
router.get("/", async (req, res) => {
try {
    const post = await Post.find();
    res.json(post)
} catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
    
}
}); 
module.exports = router;
