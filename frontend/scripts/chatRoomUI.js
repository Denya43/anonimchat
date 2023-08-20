class ChatRoomUI {
    constructor() {
        this.userList = document.getElementById('user-list');
    }

    // Method to update the list of active users in the chat room
    updateActiveUsers(users) {
        this.userList.innerHTML = ''; // Clear existing user list

        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user');
            userElement.textContent = user.name; // Assuming each user object has a "name" property

            this.userList.appendChild(userElement);
        });
    }
}

export default ChatRoomUI;
