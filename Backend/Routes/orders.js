const express = require('express');
const {verifyToken} = require('../Controllers/authMiddleware');
const { allOrders, orderDetails } = require('../Controllers/orders');

const router = express.Router();

router
.post('/allOrders',verifyToken,allOrders)
.post('/orderDetails',verifyToken,orderDetails);

module.exports = router;