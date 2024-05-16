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

app.post('/signup',(req,res)=>{
    var signupData = req.body;
    db.query(`Insert into userData (name,user_name,user_password,user_email) values ($1,$2,$3,$4)`,[signupData.name,signupData.username,signupData.password,signupData.email]);
    res.redirect('/');
});

app.post('/login',async (req,res)=>{
    var loginData = req.body;
    console.log(loginData.email);
    const result = await db.query(`Select user_password from userData where user_email = $1`,[loginData.email]);
    const loginPassword = result.rows[0].user_password;
    console.log(loginPassword);
    var loginSuccess = false;
    if(loginPassword)
    {
        if(loginPassword==loginData.password)
            loginSuccess=true;
    }
    if(loginSuccess){
        res.send('Login Succsessful');
    }
    else{
        res.send('Wrong user details');
    }
})

// db.end();

app.listen(port,()=>{
    console.log('Server is running');
});