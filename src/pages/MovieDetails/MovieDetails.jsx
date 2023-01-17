import { Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  const location = useLocation();
  const [backLinkHref, setBackLinkHref] = useState(location.state?.from ?? '/');

  useEffect(() => {
    API.getMovie(movieId)
      .then(res => res.json())
      .then(res => setItem(res));
  }, [movieId]);

  if (!item) {
    return;
  }
  const {
    backdrop_path,
    title,
    poster_path,
    overview,
    genres,
    popularity,
    release_date,
  } = item;
  const img = backdrop_path ? backdrop_path : poster_path;
  const year = release_date.split('-')[0];
  return (
    <>
      <NavLink to={backLinkHref}>Back to movies</NavLink>
      <div className={css.container}>
        <img src={'https://image.tmdb.org/t/p/w500' + img} alt={title} />
        <div>
          <h1>{`${title}(${year})`}</h1>
          <p>{`User score ${Math.round(popularity)}%`}</p>
          <p>
            <b>Overview</b> {overview}
          </p>
          <p>
            <b>Genres</b> {genres.map(genre => genre.name).join(' ')}
          </p>
        </div>
      </div>
      <p>Addition information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
