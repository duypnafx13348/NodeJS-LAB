const express = require('express'); 
const adminData = require('./admin');

const router = express.Router();

//Middleware với path là localhost3000
router.get('/',(req, res, next) => {
    const products = adminData.products;
    console.log(products);
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;