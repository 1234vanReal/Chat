const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Socket.IO-Verbindung
io.on('connection', (socket) => {
    console.log('Ein Benutzer hat sich verbunden.');

    // Nachrichten empfangen und an alle senden
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
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