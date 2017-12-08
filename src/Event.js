import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import Attendee from './Attendee'

class Event extends Component {
  constructor() {
    super()
    this.rsvpYes = this.rsvpYes.bind(this)
  }

  rsvpYes() {
    const targetEvent = this.props.id
    const uid = this.props.userProfile.uid
    const newAttendee = {
      name: this.props.userProfile.name,
      avatar: this.props.userProfile.avatar
    }
    
    this.props.addRsvp(targetEvent, uid, newAttendee);
    // this.props.addRsvp(attendee)
  }

  render(key) { 
    return (
    <div className="event">
      <h2>{this.props.details.eventName}</h2>
      <p>Date: {this.props.details.date}</p>
      <p>Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location} (<a rel="noopener noreferrer" href="https://www.google.com/maps/place/Starbucks/@39.0519611,-77.4547482,17z/data=!3m1!4b1!4m5!3m4!1s0x89b6395eda1b4e57:0x3bb0c94821ad7b90!8m2!3d39.051957!4d-77.4525595" target="_blank">Google Maps</a>)</p>
      <p>Details: {this.props.details.details}</p>
      <p>Creator: {this.props.details.creator}</p>

      <button onClick={this.rsvpYes}>I'm going!</button>
      <h3>Attendees</h3>
        <div>
          { Object.keys(this.props.attendeesList)
                  .map(key => <Attendee key={key} {...this.props} details={this.props.attendeesList[key]}/>)
          } 
        </div>
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