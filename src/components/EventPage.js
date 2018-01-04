import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import Attendee from './Attendee'

Event.propTypes = {
  deleteEvent: PropTypes.func,
  attendeesList: PropTypes.object
}

class EventPage extends Component {  
  render() { 
    const { id } = this.props
    const targetAttendees = this.props.eventsList[id].attendees
    const commentsLength = this.props.eventsList[id].comments
    const rsvpYes = <button onClick={this.rsvpYes}>&#9745; Yes</button>
    const rsvpNo = <button onClick={this.rsvpNo}>&#9746; No</button>

    return (
    <div className="event">
      <h2 className="header3">{this.props.details.eventName}</h2>
      <p>Date: {this.props.details.date}</p>
      <p>Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location}</p>
      <p>Creator: {this.props.details.creator}</p>
      <p>Details: {this.props.details.details}</p>

      <h3 className="header3">Attendees</h3>
      {(targetAttendees) ? targetAttendees.map( (attendee, i) => <Attendee key={i} attendee={attendee} />)
        : ""
      } 

      <h3 className="header3">Comments</h3>
      <p>
        {commentsLength ? <span role="img" aria-label="Comment Icon">&#128172; {commentsLength.length}</span> 
          : <span role="img" aria-label="Comment Icon">&#128172; 0</span>} 
      </p>

      {this.props.loggedIn && rsvpYes}
      {this.props.loggedIn && rsvpNo}
      {/* <hr id="divider" /> */}
    </div>
    )
  }
}

export default EventPage