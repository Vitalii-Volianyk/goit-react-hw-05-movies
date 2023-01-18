import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';
import Thumbnail from 'components/Thumbnail';

const MovieCard = ({ item: { backdrop_path, title, poster_path, id } }) => {
  const img = backdrop_path ? backdrop_path : poster_path;
  const location = useLocation();
  return (
    <li className={css.container}>
      <NavLink
        className={css.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {img ? (
          <img
            className={css.poster}
            src={'https://image.tmdb.org/t/p/w500' + img}
            alt={title}
          />
        ) : (
          <Thumbnail className={css.poster} noText="NO IMAGE" />
        )}
        <p className={css.title}>{title}</p>
      </NavLink>
    </li>
  );
};

export default MovieCard;
