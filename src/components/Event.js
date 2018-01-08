import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import Attendees from './Attendees'
import Comments from './Comments'

class Event extends Component {
  render() {
    const { eventName, date, time, location, creator, details } = this.props.details
    return (
      <div className="event">
        <h2>{eventName}</h2>
        <p>Date: <span className="white">{date}</span></p>
        <p>Time: <span className="white">{time}</span></p>
        <p>Location: <span className="white">{location}</span></p>
        <p>Creator: <span className="white">{creator}</span></p>
        <p>Details: <span className="white">{details}</span></p>
        
        <Attendees {...this.props} />

        <Comments {...this.props} />
      </div>
    )
  }
}

export default Event