import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import { Link, useLocation } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => {
        if (data.length >= 20) {
          setMovies(data.slice(0, 20)); 
        } else {
          setMovies(data);
        }
      })
      .catch(console.error);
  }, []);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies</h1>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={styles.movieLink}
            >
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300'
                }
                alt={movie.title}
                className={styles.movieImage}
              />
              <h3 className={styles.movieTitle}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

