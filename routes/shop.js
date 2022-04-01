const express = require('express'); 
const path = require('path'); // import path để hỗ trợ lấy file html dưới dòng 7

const router = express.Router();
//Middleware với path là localhost3000
router.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // sử dụng sendFile(path.join(__dirname, '../', 'views', 'shop.html')) để lấy file shop.html từ views
});

module.exports = router;