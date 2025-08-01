import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion'; 
import FoodCard from '../components/FoodCard';
import { menuItems } from '../data/menuItems';
import SearchAndFilter from '../components/SearchAndFilter';
import './Menu.css';


const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(menuItems.map(item => item.category))], []);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="menu-page">
      
      <motion.div
        className="page-header"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="page-title" variants={textItemVariants}>
          Explore Our Menu
        </motion.h1>
        <motion.p className="page-subtitle" variants={textItemVariants}>
          Find your next favorite dish with our smart search and filters.
        </motion.p>
      </motion.div>
      
      <SearchAndFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories.filter(c => c !== 'All')}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <FoodCard key={item.id} item={item} searchQuery={searchQuery} />
          ))
        ) : (
          <p className="no-results">No dishes found. Try a different search or filter!</p>
        )}
      </div>
    </div>
  );
};

export default Menu;