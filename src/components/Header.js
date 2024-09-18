// components/Header.js
import React from 'react';
import { SearchIcon, HomeIcon, MessageCircleIcon, PlusSquareIcon } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Finsplash</div>
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input className="search-input" placeholder="Search" type="search" />
        </div>
        <nav className="nav">
          <button className="nav-button"><HomeIcon /></button>
          <button className="nav-button"><MessageCircleIcon /></button>
          <button className="nav-button"><PlusSquareIcon /></button>
        </nav>
      </div>
    </header>
  );
};

export default Header;