import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const userRoute = express.Router();

userRoute.get('/', getUsers);
userRoute.get('/:id', verifyToken, getUser);
userRoute.put('/:id', verifyToken, updateUser);
userRoute.delete('/:id', verifyToken, deleteUser);

export default userRoute;
