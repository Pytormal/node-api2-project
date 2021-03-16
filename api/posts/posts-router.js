// implement your posts router here
const express = require("express");

const router = express.Router();
const Post = require("./posts-model");

// 1 [GET] /api/posts
// Completed
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
  }
});

// 2 [GET] /api/posts/:id
// Incomplete: id in url does not show post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist",
      });
    }
  }
  catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
  }
});

module.exports = router;
