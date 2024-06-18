const express = require('express');
const db = require('../Model/database');

exports.getAddress = async (req,res)=>{
    const result = await db.query(`select * from address where user_id = $1`,[req.body.userid]);
    res.json(result.rows);
}

exports.addAddress = async (req,res)=>{
    const formData = req.body;
    const result = await db.query(`insert into address values ($1,$2,$3,$4,$5,$6,$7)`,[formData.phone_number,formData.province,formData.city,formData.zip,formData.street_address,formData.full_name,  formData.user_id]);
    res.json('Address added successfully')
}

exports.removeAddress = async (req,res)=>{
    const result = await db.query(`delete from address where address_id = $1`,[req.body.address_id]);
    res.json('address removed');
}