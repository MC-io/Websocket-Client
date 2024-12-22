const WebSocket = require('ws');

// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server:', event.data);

    // Perform actions based on the message
    if (event.data === 'ACTION_1') {
        // Execute some logic for ACTION_1
        console.log('Performing ACTION_1...');
    } else if (event.data === 'ACTION_2') {
        // Execute some logic for ACTION_2
        console.log('Performing ACTION_2...');
    } else {
        console.log('Unknown action');
    }
});

// Handle WebSocket errors
socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

// Handle WebSocket connection closure
socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
});