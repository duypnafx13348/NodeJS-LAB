const http = require('http');

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Cho phép request tiếp tục đến middleware tiếp theo. Nếu next() không được gọi thì dòng số 11 đến 13 sẽ không được thực hiện
});

app.use((req, res, next) => {
    console.log('In the another middleware!');
});

const server = http.createServer(app);

server.listen(3000);