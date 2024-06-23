const express = require('express');
const db = require('../Model/database');
const { v4: uuidv4 } = require('uuid');

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

exports.placeOrder = async (req,res) =>{
    console.log('Place order entered');
    const user = req.body.userData;
    const address = req.body.address;
    const totalPrice = req.body.totalPrice;
    const orderid = uuidv4();
    const result = await db.query(`Select * from cart where user_id = $1`,[user.userid])
    const products = result.rows;
    await db.query(`Insert into orders(user_id,total_cost,address_id,order_id) values ($1,$2,$3,$4)`,[user.userid,totalPrice,address,orderid]);
    const insertOrderItemsQuery = `
      INSERT INTO order_items (order_id, product_id, quantity)
      VALUES ($1, $2, $3);
    `;
    for (let item of products) {
        await db.query(insertOrderItemsQuery, [orderid, item.product_id, item.quantity]);
      }
}