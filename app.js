const express = require('express');
const app = express();

// Middleware 1
app.use('/',(req, res, next) => {
    console.log('This always run!');
    next();
});
// Middleware 2
app.use('/add-product',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The Add Product Page!</h1>');
});
//Middleware 3
app.use('/',(req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express.js</h1>');
});

app.listen(3000);