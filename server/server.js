const express = require('express');
const userRouter = require('./user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', userRouter);

app.listen(9093, function () {
  console.log('Node app start at port 9093');
});
