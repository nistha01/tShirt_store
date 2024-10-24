import React from "react";
import './Cart.css';

const Cart = (props) => {
  return (
    <div className="card">
      <h2 className="card-title">Your Cart</h2>
      <ul className="cart-list">
        {props.cartObjectTshirt.map((tshirt, index) => (
          <li key={index} className="cart-item">
            <span className="item-name">Name: {tshirt.name} </span>
            <span className="item-description">Desc: {tshirt.description} </span>
            <span className="item-price">Price: {tshirt.price} </span>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">Total: ${props.total.toFixed(2)}</h3>
      <button className="close-btn" onClick={props.onClose}>Close</button>
      <button className="clear-btn" onClick={props.onClear}>Clear Cart</button>
    </div>
  );
};

export default Cart;
