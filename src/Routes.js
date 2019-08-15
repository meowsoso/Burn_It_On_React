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
<<<<<<< HEAD
      <Route path="/" component={Main} />
=======
<<<<<<< HEAD
        <Route exact path="/" component={FlightSearch} />
        <Route path="/Flights/:id" component={ Flights } />

=======
      <Route path="/user" component={User} />
>>>>>>> 8ee58b7053f8ce7b0b9bd874a2573dd9a57bfa6f
      <Route path="/Flights/:id" component={Flights} />
      <Route extend path="/FlightSearch" component={FlightSearch} />
>>>>>>> 4c8f92a01e9499083815459be03dd08ff2b9ed51
    </div>
  </Router>
);

export default Routes;
