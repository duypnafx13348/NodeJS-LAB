const express = require('express'); // import express.js được cài đặt từ npm install để hỗ trợ code nhanh hơn
const bodyParser = require('body-parser'); // import body-parser được cái đặt từ npm install để hỗ trợ lấy giá trị của ô <input> trong thẻ <form>
const adminRoutes = require('./routes/admin'); //import từ file admin trong routes vào
const shopRoutes = require('./routes/shop');    //import từ file shop trong routes vào

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // sử dụng body-parser đã import vào từ dòng 2

app.use('/admin',adminRoutes);   // sử dụng router đã được import vào từ dòng 3
app.use(shopRoutes);    // sử dụng router đã được import vào từ dòng 4

// xử lý lỗi khi nhập địa chỉ (path) khác
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not pound</h1>');
});

app.listen(3000);