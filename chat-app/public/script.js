const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const emojiPicker = document.getElementById('emoji-picker');

// Benutzernamen aus sessionStorage abrufen
const username = sessionStorage.getItem("username");

// Überprüfen, ob der Benutzer eingeloggt ist
if (!username) {
    alert("Bitte loggen Sie sich zuerst ein!");
    window.location.href = "login.html"; // Weiterleitung zur Login-Seite
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
        // Nachricht senden
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

// Nachricht empfangen
socket.on('chat message', (msg) => {
    const item = document.createElement('li');

    // Überprüfen, ob die Nachricht ein Bild ist (z. B. URL mit .jpg, .png, .gif)
    if (msg.startsWith('http') && (msg.endsWith('.jpg') || msg.endsWith('.png') || msg.endsWith('.gif'))) {
        const img = document.createElement('img');
        img.src = msg;
        img.style.maxWidth = '200px'; // Begrenze die Bildgröße
        img.style.borderRadius = '5px';
        item.appendChild(img);
    } else {
        // Normale Nachricht (Text oder Emojis)
        item.textContent = msg;
    }

    messages.appendChild(item);

    // Automatisch nach unten scrollen
    messages.scrollTop = messages.scrollHeight;
});

// Emoji auswählen und ins Eingabefeld einfügen
emojiPicker.addEventListener('emoji-click', (event) => {
    input.value += event.detail.unicode; // Emoji zum Eingabefeld hinzufügen
});