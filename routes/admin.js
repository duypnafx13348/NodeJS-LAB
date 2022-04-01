const express = require('express');
const path = require('path');

const router = express.Router();
// Middleware với path là localhost3000/admin/add-product vì ở app.js dòng 10 đã thêm path /admin ở đầu
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});
// Middleware với path là localhost3000/admin/product vì ở app.js dòng 10 đã thêm path /admin ở đầu
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;