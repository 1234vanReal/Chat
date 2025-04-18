const socket = io('https://chat-v66h.onrender.com'); // Render-URL einfügen

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const usernameDisplay = document.getElementById('username-display');

// Benutzernamen aus sessionStorage abrufen
const username = sessionStorage.getItem("username");

// Überprüfen, ob der Benutzer eingeloggt ist
if (!username) {
    alert("Bitte loggen Sie sich zuerst ein!");
    window.location.href = "login.html"; // Weiterleitung zur Login-Seite
} else {
    // Benutzernamen im Header anzeigen
    usernameDisplay.textContent = `Eingeloggt als: ${username}`;
}

// Chatverlauf empfangen und anzeigen
socket.on('chat history', (history) => {
    history.forEach((msg) => {
        const item = document.createElement('li');
        item.textContent = `${msg.user}: ${msg.text}`;
        messages.appendChild(item);
    });

    // Automatisch nach unten scrollen
    messages.scrollTop = messages.scrollHeight;
});

// Nachricht senden
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', { user: username, text: input.value });
        input.value = '';
    }
});

// Nachricht empfangen
socket.on('chat message', (msg) => {
    const item = document.createElement('li');

    // Nachricht anzeigen
    item.textContent = `${msg.user}: ${msg.text}`;
    messages.appendChild(item);

    // Automatisch nach unten scrollen
    messages.scrollTop = messages.scrollHeight;
});