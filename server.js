const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (for AngularJS frontend)
app.use(express.static('public'));

// When a client connects
io.on('connection', (socket) => {
    console.log('A user connected');

    // Broadcast message to all clients
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    // When the client disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(5529, () => {
    console.log('Server is running on http://localhost:5529');
});