const express = require('express');     // import express đã cài đặt npm vào
const productsController = require('../controllers/products');  // import file products từ controllers
const path = require('path');
const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;