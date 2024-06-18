const express = require('express');
const db = require('../Model/database');

exports.fetchProducts = async(req,res)=>{
    const result = await db.query(`SELECT * FROM products JOIN cart ON products.product_id = cart.product_id WHERE cart.user_id = $1;`,[req.body.userid])
    res.json(result.rows);
}