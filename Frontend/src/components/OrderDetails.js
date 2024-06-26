import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function OrderDetails() {

    const {orderId} = useParams();

    const [orderDetails,setOrderDetails] = useState();

    async function fetchOrderDetails(){
        await axios.post('http://localhost:5000/orders/orderDetails',{orderId:orderId})
        .then(res=>{
            setOrderDetails(res.data);
          })
          .catch(error=>{
            console.log(error);
          });
    };

    useEffect(()=>{fetchOrderDetails()},[]);

  return (
    <React.Fragment>
        <div>{orderDetails.productDetails.map((elem) => (
            <div>{elem.price}</div>
        ))}</div>
    </React.Fragment>
  )
}
