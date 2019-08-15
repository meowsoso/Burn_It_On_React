import React from 'react';
import FlightSearch from './FlightSearch';
import Flights from './Flights';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <FlightSearch />
      <Flights />
      <Home />
    </div>
  );
}

export default App;
