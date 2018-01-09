import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import Attendee from './Attendee'

class Attendees extends Component {
  rsvpYes = (e) => {
    e.preventDefault()
    const { eventId } = this.props
    const { uid } = this.props.userProfile
    const newAttendee = this.props.userProfile
    const targetAttendees = this.props.eventsList[eventId].attendees
    var arr = []

    if (targetAttendees) {
      for (let key of targetAttendees) { 
        arr.push(key.uid) 
      }
    }
        
    !arr.includes(uid) && this.props.addRsvp(eventId, newAttendee)
  }

  rsvpNo = (e) => {
    e.preventDefault()
    const { eventId } = this.props
    const { eid } = this.props.details
    const { uid } = this.props.userProfile
    const targetAttendees = this.props.eventsList[eventId].attendees
    
    if (targetAttendees) {
      for (let key of targetAttendees) {
        if (uid === key.uid) {
          let rsvpToRemove = targetAttendees.indexOf(key)
          this.props.removeRsvp(eventId, rsvpToRemove, eid)
        }
      }
    }  
  }

  render() {
    const { eventId, loggedIn } = this.props
    const targetAttendees = this.props.eventsList[eventId].attendees
    const rsvpYes = <button className="rsvpYes" onClick={this.rsvpYes}>&#9745; Accept</button>
    const rsvpNo = <button className="rsvpNo" onClick={this.rsvpNo}>&#9746; Decline</button>
    const peopleIcon = <span className="white" role="img" aria-label="busts in silhouette icon">&#128101; 0</span>
    
    return (
      <div className="attendees-section">
        <h3 className="header3">Attendees</h3>
        {(targetAttendees) ? targetAttendees.map( (attendee, i) => <Attendee key={i} attendee={attendee} />)
          : <p>{peopleIcon}</p> 
        } 
        
        <div>
          {loggedIn && rsvpNo}
          {loggedIn && rsvpYes}
        </div>
      </div>
    )
  }
}

Attendees.propTypes = {
  rsvpYes: PropTypes.func,
  rsvpNo: PropTypes.func,
}

export default Attendees