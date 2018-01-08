import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import Attendee from './Attendee'

class Attendees extends Component {
  rsvpYes = (e) => {
    e.preventDefault();
    const { eventId } = this.props
    const { uid } = this.props.userProfile;
    const newAttendee = this.props.userProfile
    const targetAttendees = this.props.eventsList[eventId].attendees
    var arr = [];

    if (targetAttendees) {
      for (let key of targetAttendees) { 
        arr.push(key.uid) 
      }
    }
        
    !arr.includes(uid) && this.props.addRsvp(eventId, newAttendee)
  }

  rsvpNo = (e) => {
    e.preventDefault();
    const { eventId } = this.props
    const { uid } = this.props.userProfile;
    const targetAttendees = this.props.eventsList[eventId].attendees
    
    if (targetAttendees) {
      for (let key of targetAttendees) {
        if (uid === key.uid) {
          let rsvpToRemove = targetAttendees.indexOf(key)
          this.props.removeRsvp(eventId, rsvpToRemove)
        }
      }
    }  
  }

  render() {
    const { eventId } = this.props
    const targetAttendees = this.props.eventsList[eventId].attendees
    const rsvpYes = <button className="rsvpYes" onClick={this.rsvpYes}>&#9745; Accept</button>
    const rsvpNo = <button className="rsvpNo" onClick={this.rsvpNo}>&#9746; Decline</button>
    
    return (
      <div className="attendees-section">
        <h3 className="header3">Attendees</h3>
        {(targetAttendees) ? targetAttendees.map( (attendee, i) => <Attendee key={i} attendee={attendee} />)
        : <p><span className="white" role="img" aria-label="People Icon">&#128101; 0</span></p> 
        } 
        
        <div>
          {this.props.loggedIn && rsvpNo}
          {this.props.loggedIn && rsvpYes}
        </div>
      </div>
    )
  }
}

export default Attendees