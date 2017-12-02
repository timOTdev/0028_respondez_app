import React, { Component } from 'react';
import './App.css';
import Attendee from './Attendee';

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
      <p>Location: {this.props.details.location} (<a rel="noopener noreferrer" href="https://www.google.com/maps/place/Starbucks/@39.0519611,-77.4547482,17z/data=!3m1!4b1!4m5!3m4!1s0x89b6395eda1b4e57:0x3bb0c94821ad7b90!8m2!3d39.051957!4d-77.4525595" target="_blank">Google Maps</a>)</p>
      <p>Details: {this.props.details.details}</p>
      <p>Creator: {this.props.details.creator}</p>

      <h3>Attendees</h3>
        <div>
          {
            Object.keys(this.props.attendeesList)
                  .map(key => <Attendee key={key} {...this.props} details={this.props.attendeesList[key]}/>)
          } 
        </div>

      <button onClick={(e) => this.deleteEvent(e)}>Remove Event</button>
      <hr id="divider" />
    </div>
    )
  }
}

export default Event;