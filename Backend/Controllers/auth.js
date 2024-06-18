const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'AnshSharma'
const nodemailer = require('nodemailer');
const db = require('../Model/database');

const saltRounds = 10;

//creating transporter for sending mail
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "sharma.16ansh@gmail.com",
        pass: "goyw tidi ngwi xvut",
    },
});

//login function 
exports.login = async (req,res)=>{
    const loginData = req.body;
    const result = await db.query(`Select * from userData where user_email = $1`,[loginData.email]);
    const user = result.rows[0];
    if(result.rows.length==0)
    {
        res.json({
            isLoggedIn:false,
            userid: '',
            username:'',
            email:''
        })
    }
    else
    {
        const loginSuccess = await bcrypt.compare(loginData.password,user.user_password);
        if(loginSuccess){
            const token = jwt.sign({ id: user.user_id }, JWT_SECRET, {
            expiresIn: "1h"
            });
            res.cookie('token', token, { httpOnly: true, sameSite: 'Lax' });
            res.json({
                isLoggedIn:true,
                userid:user.user_id,
                username:user.name,
                email:user.user_email
            })
        }
        else{
            res.json({
                isLoggedIn:false,
                userid: '',
                username:'',
                email:''
            })
        }
    }
};

//signup function
exports.signup = async (req,res)=>{
    const signupData = req.body;
    const alreadyExists = await db.query(`select * from userdata where user_email = $1`,[signupData.email]);
    if(alreadyExists.rows.length){
        console.log('User already exists');
    } 
    else{
        const hashedPassword = await bcrypt.hash(signupData.password,saltRounds);
        signupData.password = hashedPassword; 
        db.query(`Insert into userData (name,user_password,user_email) values ($1,$2,$3)`,[signupData.name,signupData.password,signupData.email]);
        const info = await transporter.sendMail({
        from: '"Urban Luxe Decor"', // sender address
        to: signupData.email, 
        subject: "Sign up confirmation", 
        html: "<p>Congratulations ! You have successfully made an account at Urban Luxe Decor.</p><b>Happy Shopping !!</b>",
      });
      res.send(info);
    }
}
