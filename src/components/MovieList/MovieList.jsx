import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'; 
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movieItem}>
          <Link 
            to={`/movies/${movie.id}`} 
            state={{ from: location }}
            className={styles.movieLink}
          >
            <img
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/200x300'}
              alt={movie.title}
              className={styles.movieImage}
            />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
