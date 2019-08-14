import React, { Component } from 'react';
import axios from 'axios';

const PlaneURL = 'http://7cb203e3.ngrok.io/planes.json';


// ****** CHILD: Flight Search *********************************************

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
  render() {
      return (
        <div>
          <h2>FlightSearches</h2>
          <SearchForm onSubmit = {this.fetchPlanes} component={this.Flights} />
        </div>
      );
  }

}
//******************* PARENT: Flight Search *******************************
class FlightSearch extends Component {
  constructor(){
    super();
    this.state = {
      flights: [],
      plane_id: ""
    };
    this.fetchPlanes = this.fetchPlanes.bind(this);
  }
  saveFlightID = (s) => {
    this.setState({
      plane_id: s
    });
    this.props.storeFlightId(s);
  }
  // o = origin, d = destination
  fetchPlanes(o, d){
    axios.get(PlaneURL).then(function (results) {
      let flightsarr = [];
      for (let i = 0; i < results.data.length; i++) {
        if (results.data[i].origin === o && results.data[i].destination === d) {
            flightsarr.push(results.data[i]);
            this.setState({flights: flightsarr});
        }
      }
    }.bind(this));
  }
  render() {
      return (
        <div>
        </div>
      );
  }
}






export default FlightSearch;
