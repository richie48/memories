import express from 'express';
import { getPosts, createPost,deletePost,updatePost } from '../controller/post.js';

const router = express.Router();

//   localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id',deletePost);
router.put('/:id',updatePost);

export default router;
