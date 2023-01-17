import css from './Home.module.css';
import API from 'services/api';
import MovieGallery from 'components/MovieGallery';
import { useEffect, useState } from 'react';
const Home = () => {
  const [items, setItems] = useState('');
  useEffect(() => {
    API.getTrending()
      .then(res => res.json())
      .then(res => setItems(res.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieGallery items={items ? items : []} />
    </>
  );
};

export default Home;
