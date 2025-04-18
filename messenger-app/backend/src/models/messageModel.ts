import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
    sender: string;
    receiver: string;
    content: string;
    timestamp: Date;
}

const messageSchema: Schema = new Schema({
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;