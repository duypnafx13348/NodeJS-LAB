const http = require('http');

// Cách import trong NodeJS
const routes = require('./routes'); // lưu ý : ./routes là từ file routes.js đã exports ra

const server = http.createServer(routes);

server.listen(3000);