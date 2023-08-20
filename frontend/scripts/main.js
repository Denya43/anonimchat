import ChatRoomUI from './chatRoomUI.js';
import MessageUI from './messageUI.js';
import './websocket.js'; // Assuming this file handles WebSocket communication

// Initialize chat room UI and message UI
const chatRoomUI = new ChatRoomUI();
const messageUI = new MessageUI();

// Event listener for sending messages
const sendMessageForm = document.getElementById('send-message-form');
sendMessageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    // Send the message using the WebSocket
    sendMessage(message);

    // Clear the input field
    messageInput.value = '';
});

// Function to send a message using the WebSocket
function sendMessage(message) {
    const messageData = {
        content: message,
        // Other message data as needed
    };

    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(messageData));
    }
}

// WebSocket event listener for receiving messages
if (socket) {
    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);

        // Display the message in the UI
        messageUI.displayMessage(message);
    });
}
