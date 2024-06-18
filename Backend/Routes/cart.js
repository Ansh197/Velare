const express = require('express');
const {verifyToken} = require('../Controllers/authMiddleware');
const {fetchProducts} = require('../Controllers/cart');

const router = express.Router();

router
.post('/products',verifyToken,fetchProducts);

module.exports = router;