const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const emoji = require('node-emoji'); // Emoji-Bibliothek importieren
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Erlaube alle Ursprünge (für Debugging)
        methods: ['GET', 'POST']
    }
});

// Statische Dateien bereitstellen
app.use(express.static('public'));
app.use(cors());

// Chatverlauf speichern
const chatHistory = [];

// Socket.IO-Verbindung
io.on('connection', (socket) => {
    console.log('Ein Benutzer hat sich verbunden.');

    // Chatverlauf an den neuen Benutzer senden
    socket.emit('chat history', chatHistory);

    // Nachrichten empfangen und an alle senden
    socket.on('chat message', (msg) => {
        console.log('Nachricht erhalten:', msg);
        const messageWithEmojis = emoji.emojify(msg); // Emojis umwandeln
        chatHistory.push({ user: socket.id, text: messageWithEmojis });
        io.emit('chat message', { user: socket.id, text: messageWithEmojis });
    });

    // Benutzer trennt die Verbindung
    socket.on('disconnect', () => {
        console.log('Ein Benutzer hat die Verbindung getrennt.');
    });
});

// Server starten
const PORT = process.env.PORT || 4000; // Ändere 4000 auf einen freien Port
server.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});