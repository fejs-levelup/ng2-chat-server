// const app = require('express')(),
//       http = require("http").Server(app),
//       cors = require('cors'),
//       io = require('socket.io')(http, {
//         origins: "localhost:3000"
//       });

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// http.listen(8000, function(){
//   console.log('listening on *:8000');
// });
var app = require('express');
var server = require('http').createServer(app).listen(8888);
var io = require('socket.io')(server, {
  origins: "localhost:3000"
});

// app.listen(8888);

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});