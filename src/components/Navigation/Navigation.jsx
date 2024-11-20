import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        <div className={styles.navItem}>
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        <div className={styles.navItem}>
          <FontAwesomeIcon icon={faFilm} className={styles.icon} />
          <span>Movies</span>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navigation;



