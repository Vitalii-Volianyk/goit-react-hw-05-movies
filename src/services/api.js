const KEY = 'f843cb0634b5e8729777683d3b5f4b6d';
const getTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&language=uk-UA`
  );
};
const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=uk-UA`
  );
};
const getCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=uk-UA`
  );
};
const getReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=uk-UA`
  );
};
const searchMovie = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=uk-UA&query=${query}&page=1&include_adult=false`
  );
};
const API = {
  getTrending,
  getMovie,
  getCast,
  getReviews,
  searchMovie,
};
export default API;
