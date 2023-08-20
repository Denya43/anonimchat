import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

// URL of the WebSocket endpoint on the server
const websocketUrl = 'http://localhost:8081/chat'; // Adjust the URL as needed

// Create a SockJS instance
const socket = new SockJS(websocketUrl);

// Create a STOMP client over the SockJS connection
const stompClient = Stomp.over(socket);

// Function to connect to the WebSocket and subscribe to a destination
export function connectAndSubscribe(destination, callback) {
    stompClient.connect({}, () => {
        stompClient.subscribe(destination, (message) => {
            const messageBody = JSON.parse(message.body);
            callback(messageBody);
        });
    });
}

// Function to send a message to a destination
export function sendMessage(destination, message) {
    stompClient.send(destination, {}, JSON.stringify(message));
}
