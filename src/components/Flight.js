<<<<<<< HEAD:src/components/Flights.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


import FlightSearch from './FlightSearch';
//NOTE: This Page is distinctive linked from FlightSearch to show each Flight ID
// 6 by 40
=======
import React, { Component } from "react";
import { Link } from "react-router-dom";

import FlightSearch from "./FlightSearch";

>>>>>>> 476feff93be447bc8b36a89432f326b42c7f88b4:src/components/Flight.js
const Flights = () => {
  return (
    <div class="container">
      <h2>Welcome to Flights</h2>
<<<<<<< HEAD:src/components/Flights.js



=======
      <p>
        To search for a Flight click this link{" "}
        <Link to="/FlightSearch">ID</Link>
      </p>
      <p>
        <Link to="/flights/1">Luke Skywalker</Link>
      </p>
      <p>
        <Link to="/flights/2">R2D2</Link>
      </p>
>>>>>>> 476feff93be447bc8b36a89432f326b42c7f88b4:src/components/Flight.js
    </div>
  );
};
<<<<<<< HEAD:src/components/Flights.js
=======

>>>>>>> 476feff93be447bc8b36a89432f326b42c7f88b4:src/components/Flight.js
export default Flights;
