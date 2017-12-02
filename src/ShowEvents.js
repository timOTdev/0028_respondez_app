import React, { Component } from 'react';
import './App.css';
import Event from './Event';

class ShowEvents extends Component {
  render() {
    return (
      <div className="events">
        <h1>Events</h1>
        <div>
          { 
            Object
            .keys(this.props.eventsList)
            .map(key => <Event key={key} {...this.props}details={this.props.eventsList[key]} removeEvent={this.props.removeEvent} />)
          }
        </div>
        <button onClick={this.props.loadEvents}>Load Samples</button>
        <button onClick={this.props.removeEvents}>Remove Samples</button>
      </div>
    )
  }
}

export default ShowEvents;