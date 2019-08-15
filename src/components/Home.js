import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Home</h2>
      <p>Please check out our <Link to="/faq">frequently asked questions</Link></p>
      <p>
        <Link to="/FlightSearch">FlightSearch</Link>
      </p>
  
    </div>
  )
};

export default Home;
