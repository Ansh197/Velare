const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pg = require('pg');
const nodemailer = require('nodemailer');

const saltRounds = 10;

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

app.post('/signup',async (req,res)=>{
    console.log('Iam in singup auth');
    var signupData = req.body;
    const alreadyExists = await db.query(`select * from userdata where user_email = $1`,[signupData.email]);
    console.log(alreadyExists.rows);
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
    }
});

app.post('/login',async (req,res)=>{
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
})

app.get('/allproducts',async (req,res)=>{
    const result = await db.query('select * from products');
    const productData = result.rows;
    res.json(productData);
})

app.post('/addtocart',async (req,res)=>{
    const result = await db.query(`Insert into cart (product_id,user_id) values($1,$2)`,[req.body.product_id,req.body.user_id]);
})

app.post('/cart',async(req,res)=>{
    const result = await db.query(`SELECT * FROM products JOIN cart ON products.product_id = cart.product_id WHERE cart.user_id = $1;`,[req.body.userid])
    res.json(result.rows)
})

// db.end(); 

app.listen(port,()=>{
    console.log('Server is running');
});