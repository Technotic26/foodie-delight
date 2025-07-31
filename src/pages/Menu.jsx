import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import { menuItems } from '../data/menuItems';
import { useCart } from '../context/CartContext';
import './Menu.css';

const Menu = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = menuItems
    .filter(item => 
      (selectedCategory === 'All' || item.category === selectedCategory)
    )
    .filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="menu-page">
      <h1 className="page-title">Explore Our Menu</h1>

      <div className="filter-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} onAddToCart={addToCart} />
          ))
        ) : (
          <p className="no-items-message">No items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;