import React, { Component } from 'react';
import './App.css';
import Event from './Event';

class ShowEvents extends Component {
  render() {
    return (
      <div className="events">
        { 
          Object
          .keys(this.props.eventsList)
          .map(key => <Event key={key} details={this.props.eventsList[key]} />)
        }
        <button onClick={this.props.loadEvents}>Load sample events</button>
      </div>
    )
  }
}

export default ShowEvents;