const express = require('express');
const { login, logout, register } = require('../controllers/auth.controller.js');

const authRoute = express.Router();

authRoute.post('/register', register);
authRoute.post('/login', login);
authRoute.post('/logout', logout);

module.exports = authRoute;