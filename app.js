var app = require('express'),
    server = require('http').createServer(app).listen(8888),
    io = require('socket.io')(server, {
      origins: "localhost:*"
    });

io.on('connection', function (socket) {
  socket.emit("chat message", {
    message: "Chat or die"
  });

  socket.on("chat message", function (data) {
    socket.emit("chat message", data);
  });
});