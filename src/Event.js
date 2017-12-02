import React, { Component } from 'react';
import './App.css';

class Event extends Component {
  constructor() {
    super();
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  deleteEvent(e) {
    const event = this._reactInternalFiber.key;
    this.props.removeEvent(event);
  }

  render() { 
    return (
    <div className="event">
      <h2>{this.props.details.eventName}</h2>
      <p>Date: {this.props.details.date}</p>
      <p>Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location}</p>
      <p>Details: {this.props.details.details}</p>
      <p>Creator: {this.props.details.creator}</p>
      <p>{this.key}</p>
      <button onClick={(e) => this.deleteEvent(e)}>Remove Event</button>
      <hr id="divider" />
    </div>
    )
  }
}

export default Event;