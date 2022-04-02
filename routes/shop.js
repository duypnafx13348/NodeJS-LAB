const express = require('express'); 
const path = require('path'); // import path để hỗ trợ lấy file html dưới dòng 7
const rootDir = require('../helpers/path'); // import path.js từ helpers để sử lý render giao diện cho người dùng dưới dòng số 8
const adminData = require('./admin');

const router = express.Router();

//Middleware với path là localhost3000
router.get('/',(req, res, next) => {
    res.render('shop');
});

module.exports = router;