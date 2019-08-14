import React from 'react';
import '../App.css';
import FlightSearch from './FlightSearch';
import Flights from './Flights';


function App() {
  return (
    <div className="App">
      <FlightSearch />
      <Flights />
    </div>
  );
}

export default App;
