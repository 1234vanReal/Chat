import React, { useEffect, useState } from 'react';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            fetchMessages();
        } else {
            // Redirect to login or handle unauthenticated user
        }
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch('/api/chat/messages');
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    return (
        <div>
            <h1>Chat Room</h1>
            <h2>Welcome, {username}</h2>
            <ChatWindow messages={messages} />
        </div>
    );
};

export default ChatPage;