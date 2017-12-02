import React, { Component } from 'react';
import './App.css';
import blankPicture from './blank-picture.png';

class Attendee extends Component {
  render() {
    return (
      <div className="Attendee">
          <img src={this.props.details.profileUrl} alt={ (this.props.details.firstName) + " " + (this.props.details.lastName) } />
          <p>{this.props.details.firstName} {this.props.details.lastName}</p>
      </div>
    )
  }
}

export default Attendee;