// components/Header.js
import React, { useState } from 'react';
import './Header.css';
import finsplash from '../finsplash.svg';
import { FiInfo } from "react-icons/fi";


const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
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
        <FiInfo className="info-icon" onClick={toggleOverlay} />
      </div>
      {showOverlay && (
        <div className="overlay" onClick={toggleOverlay}>
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <img src={finsplash} alt="Fi Icon" className="popup-icon" /> {/* Add the SVG image */}
          <div className="divider"></div> {/* Divider below the image */}
          <p>
            Hey! Thanks for checking out the app. 🙂 If you have any questions or want to report any bugs, you can reach me at 
            <a href="https://asamshah.com" target="_blank" rel="noopener noreferrer" className="link"> asamshah.com</a>
          </p>
        </div>
      </div>
      )}
    </header>
  );
};

export default Header;