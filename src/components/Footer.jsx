import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Adlakha's Kitchen. All Rights Reserved.</p>
        <p>Made with ❤️ in Prayagraj</p>
      </div>
    </footer>
  );
};

export default Footer;