const express = require('express');
const {verifyToken} = require('../Controllers/authMiddleware');
const { allOrders } = require('../Controllers/orders');

const router = express.Router();

router
.post('/allOrders',verifyToken,allOrders);

module.exports = router;