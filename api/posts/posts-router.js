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
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
  }
});

// 3 [POST] /api/posts
// Complete: it creates a new post
// Incomplete: fails to show post info aupon created, shows post when showing all posts
router.post("/", async (req, res) => {
  const post = req.body;
  if (!post.title || !post.contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  } else {
    try {
      const newPost = await Post.insert(post);
      res.status(201).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "There was an error while saving the post to the database",
      });
    }
  }
});

// 4 [PUT] /api/posts/:id
// Complete: post are updated
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  try {
    const updatePost = await Post.update(id, post);
    res.status(200).json(post);
    if (updatePost) {
      res.status(404).json({
        message: "The post with the specified ID does not exist",
      });
    } else {
      res.status(400).json({
        message: "Please provide title and contents for the post",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "The post information could not be modified" });
  }
});

// 5 [DELETE] /api/posts/:id
// Completed: deletes specifc id
// Incomplete: fails to show deleted id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.remove(id);
    if (post) {
      res.json(post);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "The post could not be removed" });
  }
});

// 6 [GET] /api/posts/:id/comments
router.get("/:id/comments", async (req, res) => {
  try {
    const post = await Post.findPostComments(postId);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "The comments information could not be retrieved" });
  }
});

module.exports = router;