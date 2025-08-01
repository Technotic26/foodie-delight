import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext'; 
import { ShoppingCart, Sun, Moon } from 'lucide-react'; 
import './Navbar.css';

const Navbar = () => {
  const { getCartItemCount } = useCart();
  const { isDarkMode, toggleTheme } = useTheme(); 

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        FoodieDelight 🍔
      </Link>
      <div className="navbar-actions">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
        
        
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Link to="/cart" className="cart-link">
          <ShoppingCart size={24}/>
          {getCartItemCount() > 0 && <span className="cart-badge">{getCartItemCount()}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;