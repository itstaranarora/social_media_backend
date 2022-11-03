import express from "express";

const router = express.Router();
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
  likePost,
  getPostsBySearch,
  commentPost,
  getAllUserComments,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

router.get("/search", getPostsBySearch);
router.get("/userComments", auth, getAllUserComments);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
