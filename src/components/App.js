<<<<<<< HEAD
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
=======
import React from "react";
import { CookiesProvider } from "react-cookie";
import TokenAuth from "./TokenAuth.js";

class App extends React.Component {
  render() {
    return (
      <CookiesProvider>
        <TokenAuth />
      </CookiesProvider>
    );
  }
>>>>>>> 476feff93be447bc8b36a89432f326b42c7f88b4
}

App.defaultProps = {};

export default App;
