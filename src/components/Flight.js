import React, { Component } from "react";
import { Link } from "react-router-dom";

import FlightSearch from "./FlightSearch";

const Flights = () => {
  return (
    <div>
      <h2>Welcome to Flights</h2>
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
    </div>
  );
};

export default Flights;
