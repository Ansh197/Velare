import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { userData } = useContext(UserContext);

  const fetchOrders = async () => {
    await axios
      .post("http://localhost:5000/orders/allOrders", {
        user_id: userData.userid,
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, [orders]);

  return (
    <React.Fragment>
      <div className="ordersHeading">My Orders</div>
      <div className="orderOuterContainer">
        {orders.map((elem) => {

          const slicedElements = elem.products.slice(0,4);
          const remainingCount = elem.products.length-4;
          
          return (
          <div className="ordersContainer">
            <div className="orderInfo">
              <div>
                <div className="orderDetails">Order ID : {elem.order_id}</div>
                <div className="orderDetails">
                  Total Cost : {elem.total_cost}
                </div>
                <div className="orderDetails">
                  Order Date : {elem.order_date}
                </div>
              </div>
              <div className="viewOrderDetails">View Details</div>
            </div>

            <div className="orderProductsContainer">
              {slicedElements.map((card,index) => (
                <div className="orderedProductsImage">
                  <img src={card.image_url} />
                  {index === slicedElements.length - 1 && remainingCount > 0 && (
                    <span>
                      +{remainingCount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )})}
      </div>
    </React.Fragment>
  );
}
