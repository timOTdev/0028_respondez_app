import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import Event from './Event'

class ShowEvents extends Component {
  render() {
    return (
      <div className="events">
        <h1 className="header2">Events</h1>
        <div>
          { 
            Object.keys(this.props.eventsList)
              .map(key => <Event 
                            key={key} 
                            eventId={key}
                            {...this.props} 
                            details={this.props.eventsList[key]} 
            />)
          }
        </div>
        
        <button onClick={this.props.loadEvents}>Load Samples</button>
      </div>
    )
  }
}

ShowEvents.propTypes = {
  deleteEvent: PropTypes.func,
}

export default ShowEvents