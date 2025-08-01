import React from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const total = getCartTotal();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    alert(`Thank you for your order of ₹${total}! Your food is on its way.`);
  };

  return (
    <div className="checkout-page">
      <h1 className="page-title">Checkout</h1>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h2>Shipping Information</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" required />
          </div>
           <h2>Payment Details</h2>
           <div className="form-group">
            <label htmlFor="card">Card Number</label>
            <input type="text" id="card" placeholder="XXXX XXXX XXXX XXXX" required />
          </div>
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
        <div className="order-summary-box">
          <h2>Your Order</h2>
          {cartItems.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;