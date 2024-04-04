import express from 'express';
import { post } from '../controllers/post.controller.js';

const postRoute = express.Router();

postRoute.get('/post', post)

export default postRoute;