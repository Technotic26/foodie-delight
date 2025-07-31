import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// You would typically get cartItemCount from a state management solution like Context API
const Navbar = ({ cartItemCount = 0 }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        FoodieDelight 🍔
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart 🛒
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;