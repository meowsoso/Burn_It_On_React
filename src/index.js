import "core-js/fn/object/assign";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Routes from './Routes';
import App from "./components/App";
import { Router, Route3 } from 'react-router';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(Routes, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
