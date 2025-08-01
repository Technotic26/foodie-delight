import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import { menuItems } from '../data/menuItems'; 
import { useCart } from '../context/CartContext';
import './ItemDetail.css';

const ItemDetail = () => {
  const { itemId } = useParams(); 
  const { addToCart } = useCart();


  const item = menuItems.find(item => item.id === parseInt(itemId));

  
  if (!item) {
    return (
      <div className="item-not-found">
        <h2>Oops! Food item not found.</h2>
        <p>Looks like that dish isn't on the menu anymore.</p>
        <Link to="/menu" className="cta-button">Back to Menu</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <motion.div 
      className="item-detail-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="item-detail-container">
        <motion.div 
          className="item-image-container"
          whileHover={{ scale: 1.03 }}
        >
          <img src={item.image} alt={item.name} className="item-detail-image" />
        </motion.div>
        <div className="item-info-container">
          <h1 className="item-detail-name">{item.name}</h1>
          <div className="item-detail-rating">
            <span>⭐ {item.rating.toFixed(1)}</span>
          </div>
          <p className="item-detail-description">{item.description}</p>
          <div className="item-detail-footer">
            <span className="item-detail-price">₹{item.price.toFixed(2)}</span>
            <button onClick={handleAddToCart} className="add-to-cart-btn-large">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemDetail;