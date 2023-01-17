import css from './MovieGallery.module.css';
import MovieCard from './MovieCard';
const MovieGallery = ({ items }) => {
  return (
    <div className={css.gallery}>
      {items.map(item => (
        <MovieCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MovieGallery;
