import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to FoodieDelight</h1>
        <p>Your favorite meals, delivered right to your door.</p>
        <Link to="/menu" className="cta-button">
          Explore Menu
        </Link>
      </div>
    </div>
  );
};

export default Home;