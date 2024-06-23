const express = require('express');
const {verifyToken} = require('../Controllers/authMiddleware');
const {fetchProducts,removeProduct,changeQuantity, addProduct, placeOrder} = require('../Controllers/cart');

const router = express.Router();

router
.post('/products',verifyToken,fetchProducts)
.post('/add',verifyToken,addProduct)
.post('/remove',verifyToken,removeProduct)
.post('/changeQuantity',changeQuantity)
.post('/placeOrder',placeOrder);

module.exports = router;