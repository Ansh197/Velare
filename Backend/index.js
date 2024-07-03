require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const corsOptions ={
    origin: process.env.frontend, // Replace with the actual origin of your frontend
    credentials: true,

    // credentials:true,  //access-control-allow-credentials:true
    // optionSuccessStatus:200,
    methods:["GET","POST"]
}

// const db = require('./Model/database');

const port=process.env.port;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

var message = 'Hello from Port 5000';


// const authRouter = require('./Routes/auth');
// const cartRouter = require('./Routes/cart');
// const addressRouter = require('./Routes/address');
// const pageRouter = require('./Routes/pages');
// const orderRouter = require('./Routes/orders');

// app.use('/auth',authRouter);
// app.use('/cart',cartRouter);
// app.use('/address',addressRouter);
// app.use('/pages',pageRouter);
// app.use('/orders',orderRouter);

app.get('/',(req,res)=>{
    res.send(message);
});

try{
    app.listen(port,()=>{
        console.log('Server is running');
    });
}
catch(err)
{
    console.log("Error while starting server : ",err);
}