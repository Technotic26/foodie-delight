import React from 'react';
import { motion } from 'framer-motion';
import './FoodCard.css';

const FoodCard = ({ item, onAddToCart }) => {
  return (
    <motion.div
      className="food-card"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      layout
    >
      <div className="food-card-image-container">
        {/* This is the line that displays the image */}
        <img src={item.image} alt={item.name} className="food-card-image" />
        
        <div className="rating-badge">
          <span>{item.rating}</span>
          <span className="star-icon">★</span>
        </div>
      </div>
      <div className="food-card-body">
        <h3 className="food-card-title">{item.name}</h3>
        <p className="food-card-description">{item.description}</p>
        <div className="food-card-footer">
          <span className="food-card-price">₹{item.price}</span>
          <button onClick={() => onAddToCart(item)} className="add-to-cart-btn">
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;