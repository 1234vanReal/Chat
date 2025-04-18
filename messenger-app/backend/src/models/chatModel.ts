import mongoose, { Schema, Document } from 'mongoose';

interface IChat extends Document {
    participants: string[];
    messages: string[];
    createdAt: Date;
    updatedAt: Date;
}

const ChatSchema: Schema = new Schema({
    participants: { type: [String], required: true },
    messages: { type: [String], default: [] },
}, {
    timestamps: true,
});

const Chat = mongoose.model<IChat>('Chat', ChatSchema);

export default Chat;