const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,  //access-control-allow-credentials:true
    optionSuccessStatus:200
}

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
const addressRouter = require('./Routes/address');
const pageRouter = require('./Routes/pages');
const orderRouter = require('./Routes/orders');

app.use('/auth',authRouter);
app.use('/cart',cartRouter);
app.use('/address',addressRouter);
app.use('/pages',pageRouter);
app.use('/orders',orderRouter);

app.get('/',(req,res)=>{
    res.send(message);
});

app.listen(port,()=>{
    console.log('Server is running');
});