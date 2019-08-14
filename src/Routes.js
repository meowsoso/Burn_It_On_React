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
<<<<<<< HEAD
        <Route exact path="/" component={FlightSearch} />
        <Route path="/Flights/:id" component={ Flights } />

=======
      <Route path="/user" component={User} />
      <Route path="/Flights/:id" component={Flights} />
      <Route extend path="/FlightSearch" component={FlightSearch} />
>>>>>>> 4c8f92a01e9499083815459be03dd08ff2b9ed51
    </div>
  </Router>
);

export default Routes;
