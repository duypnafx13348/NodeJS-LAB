const express = require('express'); // import express.js được cài đặt từ npm install để hỗ trợ code nhanh hơn
const bodyParser = require('body-parser'); // import body-parser được cái đặt từ npm install để hỗ trợ lấy giá trị của ô <input> trong thẻ <form>

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // sử dụng body-parser đã import vào từ dòng 2

// Middleware với path là localhost3000/add-product
app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST" ><input type="text" name="tittle" /><button type="submit">Add Product</button></form>');
});
// Middleware với path là localhost3000/product
app.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
//Middleware với path là localhost3000
app.use('/',(req, res, next) => {
    res.send('<h1>Hello from Express.js</h1>');
});

app.listen(3000);