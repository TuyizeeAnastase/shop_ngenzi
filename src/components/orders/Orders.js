import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Orders.css"

function Orders() {
  const { orders } = useContext(GlobalContext);
  return (
    <div className="order-list">
      {orders.map((order) => (
        <div className="order-container" key={order.orderId}>
          <h3 className="order-id">Order ID: #ID-62Z-{order.orderId}</h3>
          <div className="order-items">
            {order.items.map((item) => (
              <div className="order-item" key={item.id}>
                <div className="order-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="order-item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${item.price}</div>
                  <div className="item-expectedDelivery">
                    (Expected delivery: 3 - 6 days)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
