const express = require('express');
const db = require('../Model/database');

exports.allProducts = async (req,res)=>{

    const colorFilter = req.body.colorFilter;
    const categoryFilter = req.body.categoryFilter;
    const brandFilter = req.body.brandFilter;

    const conditions = [];
    const values = [];

    if (colorFilter && colorFilter.length > 0) {
        conditions.push(`color = ANY($${values.length + 1})`);
        values.push(colorFilter);
      }

      if (categoryFilter && categoryFilter.length > 0) {
        conditions.push(`category = ANY($${values.length + 1})`);
        values.push(categoryFilter);
      }

      if (brandFilter && brandFilter.length > 0) {
        conditions.push(`brand = ANY($${values.length + 1})`);
        values.push(brandFilter);
      }
      
      const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

      const query = `
      SELECT *
      FROM products
      ${whereClause};
    `;

      const result = await db.query(query, values);

    // const result = await db.query('select * from products');
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

