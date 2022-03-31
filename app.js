const http = require('http');

const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Cho phép request tiếp tục đến middleware tiếp theo. Nếu next() không được gọi thì dòng số 11 đến 13 sẽ không được thực hiện
});
//Middleware 2
app.use((req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express.js</h1>');
});

const server = http.createServer(app);

server.listen(3000);