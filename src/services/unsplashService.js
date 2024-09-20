import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'Client-ID ***REMOVED***',
});

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

export const getPhotos = async (page = 1) => {
  try {
    const response = await unsplash.photos.list({ page, perPage: 10 });
    return response.response.results;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};

export const getPhotosByCategory = async (category, page = 1) => {
  try {
    if (category === 'All') {
      return getPhotos(page);
    }
    const response = await unsplash.search.getPhotos({
      query: category,
      page,
      perPage: 10,
    });
    return response.response.results;
  } catch (error) {
    console.error(`Error fetching photos for category ${category}:`, error);
    return [];
  }
};

export const getCategoryImage = async (category) => {
  try {
    let response;
    if (category === 'All') {
      response = await unsplash.photos.getRandom({ orientation: 'squarish' });
    } else {
      response = await unsplash.photos.getRandom({ query: category, orientation: 'squarish' });
    }
    
    if (response.type === 'error' || !response.response) {
      throw new Error('Failed to fetch image from Unsplash');
    }
    
    return response.response.urls.small;
  } catch (error) {
    console.error(`Error fetching category image for ${category}:`, error);
    return `https://via.placeholder.com/150?text=${encodeURIComponent(category)}`;
  }
};

export default unsplash;