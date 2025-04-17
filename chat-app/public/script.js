const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

let username = '';

// Benutzername abfragen
while (!username) {
    username = prompt('Bitte gib deinen Namen ein:');
}

// Nachricht senden
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        // Nachricht mit Benutzername senden
        socket.emit('chat message', { user: username, text: input.value });
        input.value = '';
    }
});

// Nachricht empfangen
socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = `${msg.user}: ${msg.text}`;
    messages.appendChild(item);

    // Automatisch nach unten scrollen
    messages.scrollTop = messages.scrollHeight;
});