import { NavLink } from 'react-router-dom';
import css from './MovieCard.module.css';

const MovieCard = ({ item: { backdrop_path, title, poster_path, id } }) => {
  const img = backdrop_path ? backdrop_path : poster_path;
  return (
    <NavLink to={`/movies/${id}`} className={css.container}>
      <img
        className={css.poster}
        src={'https://image.tmdb.org/t/p/w500' + img}
        alt={title}
      />
      <p className={css.title}>{title}</p>
    </NavLink>
  );
};

export default MovieCard;
