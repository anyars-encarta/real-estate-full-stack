const express = require('express');
const { getPosts, getPost, addPost, updatePost, deletePost } = require('../controllers/post.controller.js');
const verifyToken = require('../middleware/verifyToken.js');

const postRoute = express.Router();

postRoute.get('/', getPosts)
postRoute.get('/:id', getPost)

postRoute.post('/', verifyToken, addPost)

postRoute.put('/:id', verifyToken, updatePost)

postRoute.delete('/:id', verifyToken, deletePost)

module.exports = postRoute;