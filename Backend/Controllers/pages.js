const express = require('express');
const db = require('../Model/database');

exports.allProducts = async (req,res)=>{
    const result = await db.query('select * from products');
    const productData = result.rows;
    res.json(productData);
};

exports.homeDecor = async (req,res)=>{
    const result = await db.query('select * from products where category = $1',["Home Decor"]);
    const productData = result.rows;
    res.json(productData);
};

exports.seating = async (req,res)=>{
    const result = await db.query('select * from products where category = $1',["Seating"]);
    const productData = result.rows;
    res.json(productData);
};

exports.bedroom = async (req,res)=>{
    const result = await db.query('select * from products where category = $1',["Bedroom"]);
    const productData = result.rows;
    res.json(productData);
};

exports.office = async (req,res)=>{
    const result = await db.query('select * from products where category = $1',["Office"]);
    const productData = result.rows;
    res.json(productData);
};

