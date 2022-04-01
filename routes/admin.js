const express = require('express');

const router = express.Router();


// Middleware với path là localhost3000/add-product
router.get('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST" ><input type="text" name="tittle" /><button type="submit">Add Product</button></form>');
});
// Middleware với path là localhost3000/product
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;