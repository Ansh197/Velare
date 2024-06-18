const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pg = require('pg');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'AnshSharma'

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// const saltRounds = 10;

// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//         user: "sharma.16ansh@gmail.com",
//         pass: "goyw tidi ngwi xvut",
//     },
// });

const db = require('./Model/database');


const port=5000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

var message = 'Hello from Port 5000';


const authRouter = require('./Routes/auth');
const cartRouter = require('./Routes/cart');

app.use('/auth',authRouter);
app.use('/cart',cartRouter);

app.get('/',(req,res)=>{
    res.send(message);
});

// app.post('/signup',async (req,res)=>{
//     const signupData = req.body;
//     const alreadyExists = await db.query(`select * from userdata where user_email = $1`,[signupData.email]);
//     if(alreadyExists.rows.length){
//         res.send('User already exists');
//     } 
//     else{
//         const hashedPassword = await bcrypt.hash(signupData.password,saltRounds);
//         signupData.password = hashedPassword; 
//         db.query(`Insert into userData (name,user_password,user_email) values ($1,$2,$3)`,[signupData.name,signupData.password,signupData.email]);
//         const info = await transporter.sendMail({
//         from: '"Urban Luxe Decor"', // sender address
//         to: signupData.email, 
//         subject: "Sign up confirmation", 
//         html: "<p>Congratulations ! You have successfully made an account at Urban Luxe Decor.</p><b>Happy Shopping !!</b>",
//       });
//     }
// });

// app.post('/login',async (req,res)=>{
//     const loginData = req.body;
//     const result = await db.query(`Select * from userData where user_email = $1`,[loginData.email]);
//     const user = result.rows[0];
//     if(result.rows.length==0)
//     {
//         res.json({
//             isLoggedIn:false,
//             userid: '',
//             username:'',
//             email:''
//         })
//     }
//     else
//     {
//         const loginSuccess = await bcrypt.compare(loginData.password,user.user_password);
//         if(loginSuccess){
//             const token = jwt.sign({ id: user.user_id }, JWT_SECRET, {
//             expiresIn: "1h"
//             });
//             res.cookie('token', token, { httpOnly: true, sameSite: 'Lax' });
//             res.json({
//                 isLoggedIn:true,
//                 userid:user.user_id,
//                 username:user.name,
//                 email:user.user_email
//             })
//         }
//         else{
//             res.json({
//                 isLoggedIn:false,
//                 userid: '',
//                 username:'',
//                 email:''
//             })
//         }
//     }
// })

app.get('/allproducts',async (req,res)=>{
    const result = await db.query('select * from products');
    const productData = result.rows;
    res.json(productData);
})

app.post('/addtocart',async (req,res)=>{
    const result = await db.query(`Insert into cart (product_id,user_id) values($1,$2)`,[req.body.product_id,req.body.user_id]);
})

// app.post('/cart',verifyToken,async(req,res)=>{
//     const result = await db.query(`SELECT * FROM products JOIN cart ON products.product_id = cart.product_id WHERE cart.user_id = $1;`,[req.body.userid])
//     res.json(result.rows);
// })

app.post('/removefromcart',async(req,res)=>{
    const result = await db.query(`delete from cart where product_id = $1 and user_id = $2`,[req.body.product_id,req.body.user_id]);
    res.json(result.rows)
})

app.post('/changequantitycart',async (req,res)=>{
    const result = await db.query(`update cart set quantity = $1 where id = $2`,[req.body.quantity,req.body.id])
})

app.post('/getAddress', async (req,res)=>{
    const result = await db.query(`select * from address where user_id = $1`,[req.body.userid]);
    res.json(result.rows);
})

app.post('/addAddress', async (req,res)=>{
    const formData = req.body;
    const result = await db.query(`insert into address values ($1,$2,$3,$4,$5,$6,$7)`,[formData.phone_number,formData.province,formData.city,formData.zip,formData.street_address,formData.full_name,  formData.user_id]);
    res.json('Address added successfully')
})

app.post('/removeAddress', async (req,res)=>{
    const result = await db.query(`delete from address where address_id = $1`,[req.body.address_id]);
    res.json('address removed');
})

// function verifyToken(req, res, next) {
//     const token = req.cookies.token;
//     if (!token) return res.status(403).send('No token provided');
  
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) return res.status(500).send('Failed to authenticate token');
//       req.id = decoded.id;
//       next();
//     });
// }

// db.end(); 

app.listen(port,()=>{
    console.log('Server is running');
});