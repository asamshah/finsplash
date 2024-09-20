// components/Header.js
import React from 'react';
import './Header.css';
import finsplash from '../finsplash.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
      <img src={finsplash} alt="Finsplash" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
      </div>
    </header>
  );
};

export default Header;