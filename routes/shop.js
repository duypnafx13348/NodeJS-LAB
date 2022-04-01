const express = require('express');

const router = express.Router();


//Middleware với path là localhost3000
router.get('/',(req, res, next) => {
    res.send('<h1>Hello from Express.js</h1>');
});

module.exports = router;