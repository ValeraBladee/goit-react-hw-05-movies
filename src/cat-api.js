import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'd88417173bd74f0afa4871cb3367af96';

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const fetchSearchByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const fetchCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
