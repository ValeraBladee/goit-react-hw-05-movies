import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '60734cb7239d2e1b26d8feba8040402e';

export const getTrendingMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const searchMovieByKeyword = async queryValue => {
  const response = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${queryValue}`
  );
  return response.data;
};

export const searchMovieById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getCasts = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
