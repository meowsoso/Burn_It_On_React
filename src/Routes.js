import React from "react";
import { Link } from "react-router-dom";

// HashRouter is strongly preferred to save headaches with deployment.
import { HashRouter as Router, Route } from "react-router-dom";

import FlightSearch from "./components/FlightSearch";
import Flights from "./components/Flights";
import User from "./components/User";


// Not a functional component. It's just a collection of JSX.
const Routes = (
  <Router>
    <div>

        <Route exact path="/FlightSearch" component={FlightSearch} />
        <Route exact path="/user" component={User} />
        <Route path="/Flights/:id" component={ Flights } />


    </div>
  </Router>
);

export default Routes;
