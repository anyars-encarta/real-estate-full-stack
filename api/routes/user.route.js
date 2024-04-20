const express = require('express');
const { deleteUser, getUser, getUsers, updateUser, savePost, profilePosts, getNotificationNumber } = require('../controllers/user.controller.js');
const verifyToken = require('../middleware/verifyToken.js');

const userRoute = express.Router();

userRoute.get('/', getUsers);
// userRoute.get('/search/:id', verifyToken, getUser);
userRoute.put('/:id', verifyToken, updateUser);
userRoute.delete('/:id', verifyToken, deleteUser);
userRoute.post('/save', verifyToken, savePost);
userRoute.get('/profilePosts', verifyToken, profilePosts);
userRoute.get('/notification', verifyToken, getNotificationNumber);

module.exports = userRoute;
