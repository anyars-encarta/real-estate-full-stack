const express = require('express');
const { getChats, getChat, addChat, readChat } = require('../controllers/chat.controller.js');
const verifyToken = require('../middleware/verifyToken.js');

const chatRoute = express.Router();

chatRoute.get('/', verifyToken, getChats);
chatRoute.get('/:id', verifyToken, getChat);
chatRoute.post('/', verifyToken, addChat);
chatRoute.put('/read/:id', verifyToken, readChat);

module.exports = chatRoute;
