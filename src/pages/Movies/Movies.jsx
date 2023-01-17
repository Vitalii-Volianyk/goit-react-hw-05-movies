import { useState } from 'react';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    if (query !== '') {
      setSearchParams({ query });
    }
  };
  const handleInput = e => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    const query = searchParams.get('query');
    setQuery(query);
  }, [searchParams]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handleInput} type="text" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Movies;
