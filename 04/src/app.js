const express = require('express'),
    app = express(),
    socketIO = require('socket.io'),
    path = require('path'),
    PORT = process.env.PORT || 3000,
    DIR = path.join(__dirname, 'public'),
    server = express()
    .use(express.static(DIR))
    .use((req, res) => res.sendFile(DIR + 'index.html'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`)),
    io = socketIO(server);

io.on('connection', function(socket) {
    console.log('new connection');
    // Called when the client calls socket.emit('move')
    socket.on('move', function(msg) {
        socket.broadcast.emit('move', msg);
    });
});