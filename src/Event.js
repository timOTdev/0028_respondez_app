import React, { Component } from 'react';
import './App.css';

class Event extends Component {
  render() { 
    return (
    <div className="event">
      <h1>{this.props.details.eventName}</h1>
      <p>Date: {this.props.details.date}</p>
      <p>Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location}</p>
      <p>Details: {this.props.details.details}</p>
      <p>Creator: {this.props.details.creator}</p>

      <button onClick={(e) => this.removeEvent(e)}>Remove Event</button>
      <hr id="divider" />
    </div>
    )
  }
}

export default Event;