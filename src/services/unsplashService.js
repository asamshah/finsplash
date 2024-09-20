import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const UNSPLASH_ACCESS_KEY = 'Client-ID ***REMOVED***';

export const UNSPLASH_CATEGORIES = [
  'All',
  'Nature',
  'Travel',
  'Animals',
  'Food & Drink',
  'Business & Work',
  'Fashion',
  'Health & Wellness',
  'People',
  'Architecture',
  'Technology',
  'Sports',
  'Film',
  'Interiors',
  'Wallpapers',
  'Arts + Culture'
];

const unsplashApi = axios.create({
  baseURL: UNSPLASH_API_URL,
  headers: {
    Authorization: `Client-ID ***REMOVED***`,
  },
});

export const getPhotos = async (page = 1, perPage = 10) => {
  try {
    const response = await unsplashApi.get('/photos', {
      params: {
        page,
        per_page: perPage,
        order_by: 'latest',
      },
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
      params: {
        query: category,
        page,
        per_page: perPage,
        order_by: 'latest',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching photos for category ${category}:`, error);
    return [];
  }
};

export const getAllCategoriesPhotos = async (page = 1, perPage = 30) => {
  try {
    const categoryPromises = UNSPLASH_CATEGORIES.slice(1).map(category => 
      getPhotosByCategory(category, page, Math.floor(perPage / (UNSPLASH_CATEGORIES.length - 1)))
    );
    const categoryResults = await Promise.all(categoryPromises);
    const allPhotos = categoryResults.flat();
    return allPhotos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } catch (error) {
    console.error('Error fetching photos for all categories:', error);
    return [];
  }
};

export const getCategoryImage = async (category) => {
  try {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query: category,
        per_page: 1,
      },
    });
    return response.data.results[0].urls.small;
  } catch (error) {
    console.error(`Error fetching image for category ${category}:`, error);
    return '';
  }
};