class MessageUI {
    constructor() {
        this.messageContainer = document.getElementById('message-container');
    }

    // Method to display a message in the UI
    displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const contentElement = document.createElement('div');
        contentElement.classList.add('message-content');
        contentElement.textContent = message.content;

        // Customize message display based on sender, timestamp, etc.
        // You can add more HTML elements to the messageElement as needed.

        messageElement.appendChild(contentElement);
        this.messageContainer.appendChild(messageElement);

        // Optionally, scroll the message container to the bottom to show the latest message
        this.scrollToBottom();
    }

    // Method to scroll the message container to the bottom
    scrollToBottom() {
        this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    }
}

export default MessageUI;
