// components/Header.js
import React from 'react';
import './Header.css';
import finsplash from '../finsplash.svg';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <img
          src={finsplash}
          alt="Finsplash"
          style={{ width: '110px', height: '110px', objectFit: 'contain', cursor: 'pointer' }}
          onClick={scrollToTop}
        />
      </div>
    </header>
  );
};

export default Header;