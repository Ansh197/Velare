import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { orderId } = useParams();

  const [orderDetails, setOrderDetails] = useState({
    orderDetails: {
      order_id: "",
      total_cost: "",
      order_date: "",
    },
    addressDetails: {
      phone_number: "",
      zip: "",
      city: "",
      province: "",
      street_address: "",
      full_name: "",
    },
    productDetails: [
      {
        color: "",
        brand: "",
        category: "",
        description: "",
        price: "",
        image_url: "",
        quantity: "",
      },
    ],
  });

  useEffect(() => {
    const fetchOrderDetails = async () => {
      await axios
        .post("http://localhost:5000/orders/orderDetails", { orderId: orderId })
        .then((res) => {
          setOrderDetails(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchOrderDetails();
  }, [orderId]);

  return (
    <React.Fragment>
      <div className="OrderDetailsOuterContainer">
        <div className="OrderDetails-orderDetails">Order Id: {orderDetails.orderDetails.order_id}</div>
        <div className="OrderDetails-orderDetails">Order Date: {orderDetails.orderDetails.order_date}</div>
        <div className="OrderDetails-orderDetails">Total Cost: {orderDetails.orderDetails.total_cost}</div>

        <div className="Od-AddressDetailsContainer">
          <div>{orderDetails.addressDetails.full_name}</div>
          <div>{orderDetails.addressDetails.phone_number}</div>
          <div>{orderDetails.addressDetails.street_address}</div>
          <div>{orderDetails.addressDetails.province}</div>
          <div>{orderDetails.addressDetails.zip}</div>
          <div>{orderDetails.addressDetails.city}</div>
        </div>

        <div className="Od-ProductDetailsContainer">
          {orderDetails.productDetails.map((elem) => (
            <div>
              <div className="Od-ProductDetailsInnerContainer">
                <img src={elem.image_url} />
              </div>
              <div className="Od-content">
                <div>{elem.description}</div>
                <div className="Od-productDetails">
                  <div>Price: {elem.price}</div>
                  <div>Qty: {elem.quantity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
