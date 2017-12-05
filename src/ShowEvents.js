import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
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
                                {...this.props} 
                                details={this.props.eventsList[key]} 
                                deleteEvent={this.props.deleteEvent} 
                  />)
          }
        </div>
        
        <button onClick={this.props.loadEvents}>Load Samples</button>
        {/* <button onClick={this.props.deleteEvents}>Remove Samples</button> */}
      </div>
    )
  }
}

ShowEvents.propTypes = {
  deleteEvent: PropTypes.func,
  // deleteEvents: PropTypes.func
}

export default ShowEvents