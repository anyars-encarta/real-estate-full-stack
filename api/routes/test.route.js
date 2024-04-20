import express from 'express';
import { shouldBeAdmin, shouldBeLoggedIn } from '../controllers/test.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const testRoute = express.Router();

testRoute.get('/should-be-logged-in', verifyToken, shouldBeLoggedIn);

testRoute.get('/should-be-admin', shouldBeAdmin);

export default testRoute;