const express = require('express');
const { verifyToken } = require('../Controllers/authMiddleware');
const { addAddress, getAddress, removeAddress } = require('../Controllers/address');

const router = express.Router();
router
.post('/get',verifyToken,getAddress)
.post('/add',verifyToken,addAddress)
.post('/remove',verifyToken,removeAddress);


module.exports = router;