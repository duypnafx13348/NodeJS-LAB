const express = require('express'); // import express.js được cài đặt từ npm install để hỗ trợ code nhanh hơn
const bodyParser = require('body-parser'); // import body-parser được cái đặt từ npm install để hỗ trợ lấy giá trị của ô <input> trong thẻ <form>
const adminRoutes = require('./routes/admin'); //import từ file admin trong routes vào
const shopRoutes = require('./routes/shop');    //import từ file shop trong routes vào
const path = require('path');
const expressHbs = require('express-handlebars'); // import express-handlebars da cai dat vao
const errorController = require('./controllers/error');     //import file error từ controllers vào để sử dụng dưới dòng 22
const db = require('./util/database');

db.execute('SELECT * FROM products')
    .then(result => {
        console.log('result', result);
    })
    .catch(err => {
        console.log('error', err);
    });

const app = express();

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}));    // su dung handlebars da import vao tu dong 6
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false})); // sử dụng body-parser đã import vào từ dòng 2
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);   // sử dụng router đã được import vào từ dòng 3
app.use(shopRoutes);    // sử dụng router đã được import vào từ dòng 4

// xử lý lỗi khi nhập địa chỉ (path) khác
app.use(errorController.get404);

app.listen(3000);