import React, { Component } from 'react';
import FlightSearch from './FlightSearch';
import axios from 'axios';


class Seats extends Component {
  constructor(){
    super();
    this.state = {
      taken: false,
      seat_id: 0,
      user_id: 4,
      flight_id: 0,
      reservation_id: 0
    }
  }
  

}
export default Seats;
