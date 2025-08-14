import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FoodCard.css';

const FoodCard = ({ item, searchQuery }) => {
  
  const highlightMatch = (text, query) => {
    if (!query) {
      return text;
    }
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? <strong key={i}>{part}</strong> : part
        )}
      </span>
    );
  };

  return (
    <Link to={`/menu/${item.id}`} className="food-card-link">
      <motion.div
        className="food-card"
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* This wrapper is the key to consistent image sizes */}
        <div className="food-card-image-wrapper">
          <img src={item.image} alt={item.name} className="food-card-image" />
          <span className="food-card-rating">⭐ {item.rating.toFixed(1)}</span>
        </div>

        <div className="food-card-body">
          <h3 className="food-card-title">
            {highlightMatch(item.name, searchQuery)}
          </h3>
          <p className="food-card-description">
            {highlightMatch(item.description, searchQuery)}
          </p>
          <div className="food-card-footer">
            <span className="food-card-price">₹{item.price.toFixed(2)}</span>
            <span className="view-details-btn">View Details →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default FoodCard;
