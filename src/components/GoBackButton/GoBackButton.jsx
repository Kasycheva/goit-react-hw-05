import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './GoBackButton.module.css';

const GoBackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to || '/'); 
  };

  return (
    <button onClick={handleClick} className={styles.goBackButton}>
      <FontAwesomeIcon icon={faArrowLeft} /> Go Back
    </button>
  );
};

export default GoBackButton;
