// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Post from './components/Post';
import { getPhotos, getPhotosByCategory } from './services/unsplashService';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchPhotos();
  }, [selectedCategory]);

  const fetchPhotos = async () => {
    try {
      let fetchedPhotos;
      if (selectedCategory === 'All') {
        fetchedPhotos = await getPhotos();
      } else {
        fetchedPhotos = await getPhotosByCategory(selectedCategory);
      }
      setPhotos(fetchedPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <Categories onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
          <div className="posts">
            {photos.map((photo) => (
              <Post key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;