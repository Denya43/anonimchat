import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

// Create a SockJS WebSocket connection
const socket = new SockJS('http://localhost:8081/chat'); // Adjust the URL to your WebSocket endpoint
const stompClient = Stomp.over(socket);

// Function to handle incoming messages
function handleMessage(message) {
    console.log('Received message:', message);
    // Add your logic to display the message in the UI
}

// Connect to the WebSocket server
stompClient.connect({}, (frame) => {
    console.log('Connected:', frame);

    // Subscribe to the chat topic to receive messages
    stompClient.subscribe('/topic/chat', (message) => {
        const messageData = JSON.parse(message.body);
        handleMessage(messageData);
    });
});

// Send a message to the WebSocket server
function sendMessage(messageContent) {
    const message = {
        content: messageContent,
        // Other message data as needed
    };

    stompClient.send('/app/sendMessage', {}, JSON.stringify(message));
}

// Disconnect from the WebSocket server when done
function disconnect() {
    if (stompClient && stompClient.connected) {
        stompClient.disconnect();
        console.log('Disconnected');
    }
}

export { sendMessage, disconnect };
