import React, { useEffect, useState } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(() => setError('Failed to load movie details.'));
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, overview, genres, poster_path, vote_average } = movie;

  return (
    <div className={styles.container}>
      <GoBackButton />
      <div className={styles.movieDetails}>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/300x450'}
          alt={title}
          className={styles.poster}
        />
        <div className={styles.details}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.score}>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      </div>
      <nav className={styles.navigation}>
        <NavLink
          to="cast"
          state={{ from: location.state?.from }}
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          state={{ from: location.state?.from }}
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
