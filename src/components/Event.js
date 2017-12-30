import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

// import Attendee from './Attendee'

class Event extends Component {
  constructor() {
    super()
    this.rsvpYes = this.rsvpYes.bind(this)
  }

  rsvpYes() {
    const targetEvent = this.props.id
    const newAttendee = {
      name: this.props.userProfile.name,
      avatar: this.props.userProfile.avatar
    }
    
    this.props.addRsvp(targetEvent, newAttendee);
    // this.props.addRsvp(attendee)
  }

  render(key, id) { 
    // const rsvpButton = <button onClick={this.rsvpYes}>I'm going!</button>

    // const event = this.props.id 
    // var targetEvent = ["this.props.eventsList[\"" + event + "\"].attendees"]

    return (
    <div className="event">
      <h2>{this.props.details.eventName}</h2>
      <p>Date: {this.props.details.date}</p>
      <p>Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location}</p>
      <p>Details: {this.props.details.details}</p>
      <p>Creator: {this.props.details.creator}</p>

      {/* {this.props.loggedIn && rsvpButton} */}

      {/* {
        (this.props.eventsList[event].attendees) ? (
                        <div>
                          <h3>Attendees</h3>
                          {Object.keys(targetEvent).map(key => <Attendee key={key} reactKey={key} {...this.props} />)}
                        </div>
                        )
                      : ""
      }  */}
      <hr id="divider" />
    </div>
    )
  }
}

Event.propTypes = {
  deleteEvent: PropTypes.func,
  attendeesList: PropTypes.object
}

export default Event