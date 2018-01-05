import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import Attendee from './Attendee'
import Comment from './Comment'

class Event extends Component {
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
    
    for (let key of targetAttendees) {
      if (uid === key.uid) {
        let rsvpToRemove = targetAttendees.indexOf(key)
        this.props.removeRsvp(eventId, rsvpToRemove)
      }
    }
  }
  
  addComment = (e) => {
    e.preventDefault();
    const { eventId } = this.props
    const { uid, name } = this.props.userProfile;
    const time = Math.floor(Date.now() / 1000);
    const comment = this.refs.userComment.value;
    const newComment = {
      uid,
      time,
      name,
      comment
    }
    this.props.addComment(eventId, newComment)
    this.refs.commentForm.reset()
  }
  
  render() { 
    const { eventId } = this.props
    const targetAttendees = this.props.eventsList[eventId].attendees
    const comments = this.props.eventsList[eventId].comments
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
          {(comments) ? comments.map( (comment, i) => <Comment key={i} commentId={i} comment={comment} {...this.props} />)
            : <p><span role="img" aria-label="Comment Icon">&#128172; 0</span></p>
          }
          
          <form className="comment-form" ref="commentForm" onSubmit={this.addComment}>
            <span className="comment-name">{this.props.details.creator}</span> 
            <input className="comment-box" type="text" placeholder="writes..." ref="userComment" />
          </form>
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