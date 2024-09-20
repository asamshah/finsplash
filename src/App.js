import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from './components/Header';
import Categories from './components/Categories';
import Post from './components/Post';
import { getPhotos, getPhotosByCategory } from './services/unsplashService';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPhotos(true);
  }, [selectedCategory]);

  const fetchPhotos = async (reset = false) => {
    try {
      const newPage = reset ? 1 : page;
      let fetchedPhotos;
      if (selectedCategory === 'All') {
        fetchedPhotos = await getPhotos(newPage);
      } else {
        fetchedPhotos = await getPhotosByCategory(selectedCategory, newPage);
      }
      
      if (fetchedPhotos.length === 0) {
        setHasMore(false);
      } else {
        setPhotos(prev => reset ? fetchedPhotos : [...prev, ...fetchedPhotos]);
        setPage(newPage + 1);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPhotos([]);
    setPage(1);
    setHasMore(true);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <Categories onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
          <InfiniteScroll
            dataLength={photos.length}
            next={fetchPhotos}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more photos to load.</p>}
          >
            <div className="posts">
              {photos.map((photo) => (
                <Post key={photo.id} photo={photo} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </main>
    </div>
  );
};

export default App;