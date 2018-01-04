import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import Attendee from './Attendee'
import Comments from './Comments'

class Event extends Component {
  constructor() {
    super()
    this.state = {
      expandComments: false
    }
  }
  rsvpYes = (e) => {
    e.preventDefault();
    const { id } = this.props
    const { uid } = this.props.userProfile;
    const newAttendee = this.props.userProfile
    const targetAttendees = this.props.eventsList[id].attendees
    var arr = [];

    if (targetAttendees) {
      for (let key of targetAttendees) { 
        arr.push(key.uid) 
      }
    }
        
    !arr.includes(uid) && this.props.addRsvp(id, newAttendee)
  }

  rsvpNo = (e) => {
    e.preventDefault();
    const { id } = this.props
    const { uid } = this.props.userProfile;
    const targetAttendees = this.props.eventsList[id].attendees
    
    for (let key of targetAttendees) {
      if (uid === key.uid) {
        let rsvpToRemove = targetAttendees.indexOf(key)
        this.props.removeRsvp(id, rsvpToRemove)
      }
    }
  }
  
  render() { 
    const { id } = this.props
    const targetAttendees = this.props.eventsList[id].attendees
    const comments = this.props.eventsList[id].comments
    const rsvpYes = <button onClick={this.rsvpYes}>&#9745; I'm going!</button>
    const rsvpNo = <button onClick={this.rsvpNo}>&#9746; Can't go!</button>

    return (
      <div className="event">
        <h2 className="header3">{this.props.details.eventName}</h2>
        <p>Date: {this.props.details.date}</p>
        <p>Time: {this.props.details.time}</p>
        <p>Location: {this.props.details.location}</p>
        <p>Creator: {this.props.details.creator}</p>
        <p>Details: {this.props.details.details}</p>
        


        <div>
          <h3 className="header3">Attendees</h3>
          {(targetAttendees) ? targetAttendees.map( (attendee, i) => <Attendee key={i} attendee={attendee} />)
            : <p><span role="img" aria-label="People Icon">&#128101; 0</span></p> 
          } 
          <div>
            {this.props.loggedIn && rsvpYes}
            {this.props.loggedIn && rsvpNo}
          </div>
        </div>

        <div className="comment-section">
          <h3 className="header3">Comments</h3>
          {(comments) ? comments.map( (comment, i) => <Comments key={i} i={i} comment={comment} />)
            : <p><span role="img" aria-label="Comment Icon">&#128172; 0</span></p>
          }
          <span className="comment-name">{this.props.details.creator}</span> <input className="comment-box" type="text" name="Comment" placeholder="writes..."></input>
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