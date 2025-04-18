import React, { useEffect, useState } from 'react';

const ChatWindow = ({ userId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const response = await fetch('/api/chat/messages');
        const data = await response.json();
        setMessages(data);
    };

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const response = await fetch('/api/chat/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, content: newMessage }),
            });
            if (response.ok) {
                setNewMessage('');
                fetchMessages();
            }
        }
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg) => (
                    <div key={msg.id} className="message">
                        <strong>{msg.user.username}: </strong>
                        {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatWindow;