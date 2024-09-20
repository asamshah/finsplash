import React, { useState, useEffect } from 'react';
import { UNSPLASH_CATEGORIES, getCategoryImage } from '../services/unsplashService';
import './Categories.css';

const Categories = ({ onSelectCategory, selectedCategory }) => {
  const [categoryImages, setCategoryImages] = useState({});

  useEffect(() => {
    const fetchCategoryImages = async () => {
      const images = {};
      for (const category of UNSPLASH_CATEGORIES) {
        images[category] = await getCategoryImage(category);
      }
      setCategoryImages(images);
    };

    fetchCategoryImages();
  }, []);

  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {UNSPLASH_CATEGORIES.map((category, i) => (
          <div 
            key={i} 
            className={`category ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            <div className="category-icon">
              <img src={categoryImages[category]} alt={category} className="category-image" />
            </div>
            <span className="category-name">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;