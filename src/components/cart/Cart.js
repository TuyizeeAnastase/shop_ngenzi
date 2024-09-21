import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(GlobalContext);
  const [coupon, setCoupon] = useState("");
  const [deliveryType, setDeliveryType] = useState("Standard");

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const itemTotal = item.price - (item.saleDiscount ? (item.price * item.saleDiscount) / 100 : 0);
      return acc + itemTotal;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {!cart.length ? (
        <p>Your cart is empty. Please add some items.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Size</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const itemTotal = item.price - (item.saleDiscount ? (item.price * item.saleDiscount) / 100 : 0);
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    {item.saleDiscount && (
                      <td>-{item.saleDiscount}%</td>
                    )}
                    <td>{item.size}</td>
                    <td>{item.color}</td>
                    <td>
                      <input type="number" value='6' readOnly className="quantity-input" />
                    </td>
                    <td>${(itemTotal * 6).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="total">
              <span>Total:</span>
              <span>${getTotal()}</span>
            </div>
            <div className="coupon">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="apply-coupon-btn">Apply</button>
            </div>
            <div className="delivery-type">
              <label>Delivery Type:</label>
              <select value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                <option value="Standard">Standard - $5.00</option>
                <option value="Express">Express - $10.00</option>
              </select>
            </div>
            <div className="final-total">
              <span>Final Total (including delivery):</span>
              <span>${(parseFloat(getTotal()) + (deliveryType === "Express" ? 10 : 5)).toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
