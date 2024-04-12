import express from 'express';
import { deleteUser, getUser, getUsers, updateUser, savePost, profilePosts } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const userRoute = express.Router();

userRoute.get('/', getUsers);
// userRoute.get('/search/:id', verifyToken, getUser);
userRoute.put('/:id', verifyToken, updateUser);
userRoute.delete('/:id', verifyToken, deleteUser);
userRoute.post('/save', verifyToken, savePost);
userRoute.get('/profilePosts', verifyToken, profilePosts);
export default userRoute;
