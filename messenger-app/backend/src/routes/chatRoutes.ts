import { Router } from 'express';
import { ChatController } from '../controllers/chatController';

const router = Router();
const chatController = new ChatController();

router.post('/send', chatController.sendMessage);
router.get('/messages/:chatId', chatController.getMessages);

export const chatRoutes = router;