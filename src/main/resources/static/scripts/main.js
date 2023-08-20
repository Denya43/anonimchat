import ChatRoomUI from './chatRoomUI.js';
import MessageUI from './messageUI.js';
import { connectAndSubscribe, sendMessage } from './websocket.js';

// Initialize chat room UI and message UI
const chatRoomUI = new ChatRoomUI();
const messageUI = new MessageUI();

// Event listener for sending messages
const sendMessageForm = document.getElementById('send-message-form');
sendMessageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const messageInput = document.getElementById('message-input');
    const messageContent = messageInput.value;

    // Send the message using WebSocket
    sendMessage('/app/sendMessage', { content: messageContent });

    // Clear the input field
    messageInput.value = '';
});

// Connect to WebSocket and subscribe to chat room
connectAndSubscribe('/topic/chatRoom', (message) => {
    // Display the received message in the UI
    messageUI.displayMessage(message);
});
