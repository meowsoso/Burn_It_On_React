import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';


const Routes = (
  <Router>
    <div>
        <Route exact path="/" component={Home} />
        // TODO: Add Users Here Later? <Route exact path=""
    </div>
  </Router>
)

export default Routes;
