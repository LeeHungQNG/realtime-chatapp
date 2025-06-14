import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { getMessages, getUsersforSidebar, sendMessage } from '../controllers/message.controller.js';

const messageRouter = express.Router();

messageRouter.get('/users', protectRoute, getUsersforSidebar);
messageRouter.get('/:id', protectRoute, getMessages);

messageRouter.post('/send/:id', protectRoute, sendMessage);
export default messageRouter;
