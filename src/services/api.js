const KEY = 'f843cb0634b5e8729777683d3b5f4b6d';
export const fetchImage = (search, page, signal) => {
  return fetch(`https://api.themoviedb.org/3/movie/550?api_key=${KEY}`, {
    signal,
  });
};
const API = {
  fetchImage,
};
export default API;
