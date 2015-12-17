var express = require("express"),
    app = express(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server);

usernames = [];

server.listen(process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function(socket) {
    socket.on('new user', function(data, callback) {
        if (usernames.indexOf(data) != -1) {
            callback(false);
        } else {
            callback(true);
            socket.username = data;
            usernames.push(socket.username);
            updateUsernames();
        }
        
    });

    // Update Usernames
    function updateUsernames() {
        io.sockets.emit('usernames', usernames);
    }
    
    // Send Message
    socket.on('send message', function(data) {
        console.log("get message %s", data);
        io.socket.emit('new message', {msg: data, msg: socket.username});
    });

    // Disconnect
    socket.on('disconnect', function(data) {
        if (!socket.username) {
            return;
        }

        usernames.split(usernames.indexOf(socket.username), 1);
        updateUsernames();
    });
});
