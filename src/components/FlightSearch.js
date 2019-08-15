import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

// const SERVER_URL = 'http://7cb203e3.ngrok.io/flights.json';
const SERVER_URL = 'http://localhost:3000/flights.json'
//******************* PARENT: Flight Search *******************************
class FlightSearch extends Component {
  constructor(){
    super();
    this.state = {
      flights: []
    };
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  // o = origin, d = destination
 fetchFlights = (o, d) => {

    axios.get(SERVER_URL).then( (results) => {
      let flightsarr = [];
      for (let i = 0; i < results.data.length; i++) {
        if (results.data[i].origin === o && results.data[i].destination === d) {
            flightsarr.push(results.data[i]);
        }
      }
      this.setState({flights: flightsarr});
    });
  }

  render() {
      return (
        <div>
          <SearchForm onSubmit={ this.fetchFlights } />
          <Gallery flights = {this.state.flights}/>
        </div>
      );
  }
}

// ****** CHILD: Flight Search *********************************************

class SearchForm extends Component {
  constructor(){
    super();
    this.state = {
      origin: '',
      destination: ''
    };
    this._handleOriginChange = this._handleOriginChange.bind(this);
    this._handleDestinationChange = this._handleDestinationChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleOriginChange(event) {
    this.setState({origin: event.target.value});
  }

  _handleDestinationChange(event) {
    this.setState({destination: event.target.value});
  }

  _handleSubmit(event){
      event.preventDefault();
      this.props.onSubmit(this.state.origin, this.state.destination );
      // this.setState({origin: ''});
      // this.setState({destination: ''});
    }
  render() {
      return (
        <div class="container">


          <form onSubmit = { this._handleSubmit }>
            <input type="search" placeholder="from" required onInput={ this._handleOriginChange } defaultValue="" />
            <input type="search" placeholder="to" required onInput={ this._handleDestinationChange } defaultValue="" />
            <input class="btn btn-primary" type="submit" value="Search"/>
          </form>

        </div>


      );
  }
}



class Gallery extends Component {
  render(){
    return(
      <div class="container">
        <nav>

        </nav>
        <table class="table">
          <thead>
          <tr>
            <th>Flight No.</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date</th>
            <th>ID</th>

          </tr>
        </thead>
            { this.props.flights.map((f) =>
          <tbody>
          <tr>
            <td>{f.flight_number}</td>
            <td>{f.origin}</td>
            <td>{f.destination}</td>
            <td>{f.date}</td>
            <td> <Link to={'/Seats'}>Click me</Link></td>
          </tr>
          </tbody>
        )}
            </table>



      </div>
    );
  }
}


export default FlightSearch;
