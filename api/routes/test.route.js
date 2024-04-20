const express = require('express');
const { shouldBeAdmin, shouldBeLoggedIn } = require('../controllers/test.controller.js');
const verifyToken = require('../middleware/verifyToken.js');

const testRoute = express.Router();

testRoute.get('/should-be-logged-in', verifyToken, shouldBeLoggedIn);

testRoute.get('/should-be-admin', shouldBeAdmin);

module.exports = testRoute;