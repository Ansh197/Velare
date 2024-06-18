const express = require('express');
const db = require('../Model/database');

exports.fetchProducts = async(req,res)=>{
    const result = await db.query(`SELECT * FROM products JOIN cart ON products.product_id = cart.product_id WHERE cart.user_id = $1;`,[req.body.userid])
    res.json(result.rows);
}

exports.removeProduct = async(req,res)=>{
    const result = await db.query(`delete from cart where product_id = $1 and user_id = $2`,[req.body.product_id,req.body.user_id]);
    res.json(result.rows)
}

exports.changeQuantity = async (req,res)=>{
    const result = await db.query(`update cart set quantity = $1 where id = $2`,[req.body.quantity,req.body.id])
    res.json(result.rows);
}

exports.addProduct = async (req,res)=>{
    const result = await db.query(`Insert into cart (product_id,user_id) values($1,$2)`,[req.body.product_id,req.body.user_id]);
    res.send('Product added to cart Successfully');
}