import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import Event from './Event'

class ShowEvents extends Component {
  render() {
    return (
      <div className="events">
        <h1>Events</h1>
        <div>
          { 
            Object.keys(this.props.eventsList)
                  .map(key => <Event 
                                key={key} 
                                id={key}
                                {...this.props} 
                                details={this.props.eventsList[key]} 
                  />)
          }
        </div>
        
        <button onClick={this.props.loadEvents}>Load Samples</button>
        <button onClick={this.props.loadAttendees}>Load Attendees</button>
      </div>
    )
  }
}

ShowEvents.propTypes = {
  deleteEvent: PropTypes.func,
  loadAttendees: PropTypes.func
}

export default ShowEvents