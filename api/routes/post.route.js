import express from 'express';
import { getPosts, getPost, addPost, editPost, deletePost } from '../controllers/post.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const postRoute = express.Router();

postRoute.get('/', getPosts)
postRoute.get('/:id', getPost)

postRoute.post('/', verifyToken, addPost)

postRoute.put('/:id', verifyToken, editPost)

postRoute.delete('/:id', verifyToken, deletePost)

export default postRoute;