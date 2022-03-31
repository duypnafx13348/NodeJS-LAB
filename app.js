const http = require('http');

// Cách import trong NodeJS
const routes = require('./routes'); // lưu ý : ./routes là từ file routes.js đã exports ra
console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);