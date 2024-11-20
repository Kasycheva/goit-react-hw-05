import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '1.2rem' }}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
