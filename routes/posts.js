import express from "express";

import {
  getPosts,
  createPost,
  getPostsBySearch,
  getPostsForUser,
  getPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.get("/", getPosts);
router.post("/", auth, createPost);
router.get("/search", getPostsBySearch);
router.get("/posts/userr", getPostsForUser);
router.get("/:id", getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
export default router;
