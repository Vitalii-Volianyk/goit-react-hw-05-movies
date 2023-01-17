import css from './MovieGallery.module.css';
import MovieCard from './MovieCard';
const MovieGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <MovieCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MovieGallery;
