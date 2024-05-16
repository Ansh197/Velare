const express = require('express');
const cors = require('cors');
const pg = require('pg');

const db = new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'Fullstack',
    password: "Ansh123@",
    port: 5432
});

db.connect();

const port=5000;
const app = express();

app.use(express.json());
app.use(cors());

var message = 'Hello from Port 5000';

app.get('/',(req,res)=>{
    res.send(message);
});

app.post('/formSubmit',(req,res)=>{
    var formData = req.body;
    db.query(`Insert into userData (name,user_name,user_password,user_email) values ($1,$2,$3,$4)`,[formData.name,formData.username,formData.password,formData.email]);
    res.redirect('/');
});

// db.end();

app.listen(port,()=>{
    console.log('Server is running');
});