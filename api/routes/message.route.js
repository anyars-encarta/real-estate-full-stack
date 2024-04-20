const express = require('express');
const addMessage = require('../controllers/message.controller.js');
const verifyToken = require('../middleware/verifyToken.js');

const messageRoute = express.Router();

messageRoute.post('/:chatId', verifyToken, addMessage);

module.exports = messageRoute;
