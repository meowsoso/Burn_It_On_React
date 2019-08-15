import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


import FlightSearch from './FlightSearch';
//NOTE: This Page is distinctive linked from FlightSearch to show each Flight ID
// 6 by 40
class Flights extends Component {
  constructor(props){
    super(props);
    this.state = {
      flight: {}
    };
    axios.get(`http://localhost:3000/flights/${ props.match.params.id }.json`).then((result) => {
      console.log(result.data)
      this.setState({flight: result.data});
    })
  }

  render(){
    return(
      <div class="container">
        <h2>Welcome </h2>

          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Flight No.</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Book</th>

            </tr>
          </thead>

            <tbody>
            <tr>
              <td>{this.state.flight.flight_number}</td>
              <td>{this.state.flight.origin}</td>
              <td>{this.state.flight.destination}</td>
              <td>{this.state.flight.date}</td>
              <td><button> <Link to={`/Seats/`}></Link>Click me</button></td>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
};
export default Flights;
