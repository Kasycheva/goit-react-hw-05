import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    setError(null);

    searchMovies(query)
      .then((results) => {
        if (results.length === 0) {
          setError('No movies found for your search query.');
        } else {
          setMovies(results);
        }
      })
      .catch(() => setError('Failed to fetch movies.'));
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.query.value.trim();

    if (!inputValue) {
      setSearchParams({});
    } else {
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Movies</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="query"
          type="text"
          defaultValue={query}
          placeholder="Search for a movie..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;


