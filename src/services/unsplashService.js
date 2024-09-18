// src/services/unsplashService.js
import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ***REMOVED***`
  }
});

export const getPhotos = async (page = 1, perPage = 10) => {
  try {
    const response = await unsplashApi.get('/photos', {
      params: { page, per_page: perPage, order_by: 'latest' }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};

export const getPhotosByCategory = async (category, page = 1, perPage = 10) => {
  try {
    const response = await unsplashApi.get('/search/photos', {
      params: { query: category, page, per_page: perPage, order_by: 'latest' }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching photos by category:', error);
    return [];
  }
};