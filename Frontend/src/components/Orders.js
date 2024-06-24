import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';

export default function Orders() {

  const [orders,setOrders] = useState([]);
  const {userData} = useContext(UserContext);

  const fetchOrders = async() => {
    await axios.post('http://localhost:5000/orders/allOrders',{user_id:userData.userid})
    .then((res)=>{
      setOrders(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  useEffect(()=>{
    fetchOrders();
  },[orders]);

  return (
    <React.Fragment>
        <div className='orderOuterContainer'>
            {orders.map(elem => (
              <div className='ordersContainer'>
              <div>Order ID :  {elem.order_id}</div>
              <div>Total Cost :  {elem.total_cost}</div>
              <div>Order Date and Time :  {elem.order_date}</div>
              </div>
            ))}
        </div>
    </React.Fragment>
  )
}
