const express = require('express');
const { homeDecor, seating, bedroom, office, allProducts } = require('../Controllers/pages');

const router = express.Router();

router
.post('/allProducts',allProducts)
.post('/homeDecor',homeDecor)
.post('/seating',seating)
.post('/bedroom',bedroom)
.post('/office',office);

module.exports = router;