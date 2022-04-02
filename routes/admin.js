const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path'); // import path.js từ helpers để sử lý render giao diện cho người dùng dưới dòng số 9

const router = express.Router();
const products = []; // tạo 1 cái biến với mảng rỗng để lấy giá trị của ô input bỏ vào

// Middleware với path là localhost3000/admin/add-product vì ở app.js dòng 10 đã thêm path /admin ở đầu
router.get('/add-product',(req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product'})
});

// Middleware với path là localhost3000/admin/product vì ở app.js dòng 10 đã thêm path /admin ở đầu
router.post('/add-product',(req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;