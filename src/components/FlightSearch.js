import React, { Component } from 'react';

import axios from 'axios';


class FlightSearch extends Component {
  constructor(){
    super();
    this.state = {
      // flights: [],
      // flight_id: ""
    };

  }
  // saveFlightID
  // fetchPlanes(q1, q2){}


}


















// ****** Child ***********************************************************

class SearchForm extends Component {
  constructor(){
    super();
    this.state = {
      origin: '',
      destination: ''
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOriginChange = this._handleOriginChange.bind(this);
    this._handleDestinationChange = this._handleDestinationChange.bind(this);

    // this.NameOfHandler = this.NameOfHandler.bind(this);
    // Submit button Handler
    // Change / Search Handler
  }
  _handleOriginChange(event) {
  this.setState({content: event.target.value});
  }

  _handleDestinationChange(event) {
  this.setState({content: event.target.value});

  }

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination );
    this.setState({origin: ''});
    this.setState({destination: ''});
  }
  // Handler1(event) {event.preventDefault}
  // Handler2(event) {}

}
