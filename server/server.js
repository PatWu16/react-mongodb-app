const express = require('express');
const userRouter = require('./user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// work with express
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('sendmsg', function (data) {
    console.log(JSON.stringify(data));
    io.emit('recvMsg', data);
  })
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', userRouter);

server.listen(9093, function () {
  console.log('Node app start at port 9093');
});
