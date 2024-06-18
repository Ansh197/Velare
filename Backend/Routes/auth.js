const express = require('express');
const {login,signup} = require('../Controllers/auth');

const router = express.Router();
router
.post('/login',login)
.post('/signup',signup);

module.exports = router;