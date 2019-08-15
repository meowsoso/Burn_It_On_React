import React from "react";
import { Link } from "react-router-dom";

// HashRouter is strongly preferred to save headaches with deployment.
import { HashRouter as Router, Route } from "react-router-dom";

import FlightSearch from "./components/FlightSearch";
import Flights from "./components/Flights";
import Main from "./components/Main";

// Not a functional component. It's just a collection of JSX.
const Routes = (
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route path="/Flights/:id" component={Flights} />
      <Route extend path="/FlightSearch" component={FlightSearch} />
    </div>
  </Router>
);

export default Routes;
