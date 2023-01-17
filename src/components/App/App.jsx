import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SiteBar from 'components/SiteBar';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
import Reviews from 'components/Reviews';
import Casts from 'components/Casts';
import css from './App.module.css';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<SiteBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Reviews />} />
            <Route path="reviews" element={<Casts />} />
          </Route>
        </Route>
        <Route path="*" element={<div />} />
      </Routes>
    </div>
  );
};

export default App;
