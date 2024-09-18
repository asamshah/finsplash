// src/components/Categories.js
import React from 'react';
import './Categories.css';

const Categories = ({ onSelectCategory, selectedCategory }) => {
  const categories = [
    'All', 'Nature', 'Travel', 'Architecture', 'Food', 'Technology', 'People'
  ];

  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categories.map((category, i) => (
          <div 
            key={i} 
            className={`category ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            <div className="category-icon">
              <div className="icon-placeholder">{category[0]}</div>
            </div>
            <span className="category-name">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;