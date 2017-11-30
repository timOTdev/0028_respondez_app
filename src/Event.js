import React, { Component } from 'react';
import './App.css';

class Event extends Component {
  render() {
    return (
    <div className="event">
      <h1>{this.props.details.name}</h1>
      <p>Date and Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location}</p>
      <p>Description: {this.props.details.desc}</p>
      <p>Topics: {this.props.details.topics}</p>
      <hr id="divider" />
    </div>
    )
  }
}

export default Event;