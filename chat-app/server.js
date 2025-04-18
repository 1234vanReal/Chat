const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const emoji = require('node-emoji'); // Emoji-Bibliothek importieren

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Chatverlauf speichern
const chatHistory = [];

// Socket.IO-Verbindung
io.on('connection', (socket) => {
    console.log('Ein Benutzer hat sich verbunden.');

    // Chatverlauf an den neuen Benutzer senden
    socket.emit('chat history', chatHistory);

    // Nachrichten empfangen und an alle senden
    socket.on('chat message', (msg) => {
        // Kurzcode in Emoji umwandeln
        const messageWithEmojis = emoji.emojify(msg);

        // Nachricht zum Chatverlauf hinzufügen
        chatHistory.push({ user: socket.id, text: messageWithEmojis });

        // Nachricht an alle Benutzer senden
        io.emit('chat message', { user: socket.id, text: messageWithEmojis });
    });

    // Benutzer trennt die Verbindung
    socket.on('disconnect', () => {
        console.log('Ein Benutzer hat die Verbindung getrennt.');
    });
});

// Server starten
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});