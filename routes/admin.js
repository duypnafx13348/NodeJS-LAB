const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path'); // import path.js từ helpers để làm gắn gọn hơn code ở dòng số 9

const router = express.Router();
// Middleware với path là localhost3000/admin/add-product vì ở app.js dòng 10 đã thêm path /admin ở đầu
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')) // sử dụng sendFile(path.join(rootDir, 'views', 'add-product.html')) thay cho sendFile(path.join(__dirname, '../', 'views', 'add-product.html')) để lấy file add-product.html từ views
});
// Middleware với path là localhost3000/admin/product vì ở app.js dòng 10 đã thêm path /admin ở đầu
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;