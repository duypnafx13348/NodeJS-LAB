const express = require('express'); 
const productsController = require('../controllers/products');  // import file products từ controllers
const path = require('path');
const router = express.Router();

//Middleware với path là localhost3000
router.get('/', productsController.getProducts);

module.exports = router;