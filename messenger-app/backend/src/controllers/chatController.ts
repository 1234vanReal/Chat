import { Request, Response } from 'express';
import Chat from '../models/chatModel';
import Message from '../models/messageModel';

class ChatController {
    async sendMessage(req: Request, res: Response) {
        const { chatId, senderId, text } = req.body;

        try {
            const newMessage = new Message({
                chatId,
                senderId,
                text,
            });

            const savedMessage = await newMessage.save();
            res.status(200).json(savedMessage);
        } catch (error) {
            res.status(500).json({ message: 'Error sending message', error });
        }
    }

    async getMessages(req: Request, res: Response) {
        const { chatId } = req.params;

        try {
            const messages = await Message.find({ chatId }).populate('senderId', 'username');
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving messages', error });
        }
    }
}

export default new ChatController();