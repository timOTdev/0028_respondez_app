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
    const rsvpYes = <button className="rsvpYes" onClick={this.rsvpYes}>&#9745; Accept</button>
    const rsvpNo = <button className="rsvpNo" onClick={this.rsvpNo}>&#9746; Decline</button>

    return (
      <div className="event">
        <h2>{this.props.details.eventName}</h2>
        
        <p>Date: <span className="white">{this.props.details.date}</span></p>
        <p>Time: <span className="white">{this.props.details.time}</span></p>
        <p>Location: <span className="white">{this.props.details.location}</span></p>
        <p>Creator: <span className="white">{this.props.details.creator}</span></p>
        <p>Details: <span className="white">{this.props.details.details}</span></p>
        
        <div>
          <h3 className="header3">Attendees</h3>
          {(targetAttendees) ? targetAttendees.map( (attendee, i) => <Attendee key={i} attendee={attendee} />)
            : <p><span className="white" role="img" aria-label="People Icon">&#128101; 0</span></p> 
          } 
          <div>
            {this.props.loggedIn && rsvpNo}
            {this.props.loggedIn && rsvpYes}
          </div>
        </div>

        <div className="comment-section">
          <h3 className="header3">Comments</h3>
          {(comments) ? comments.map( (comment, i) => <Comment key={i} commentId={i} comment={comment} {...this.props} />)
            : <p><span className="white" role="img" aria-label="Comment Icon">&#128172; 0</span></p>
          }
          
          {this.props.loggedIn && <form className="comment-form" ref="commentForm" onSubmit={this.addComment}>
            <span className="comment-name">{this.props.details.creator}</span> 
            <input className="comment-box" type="text" placeholder="writes..." ref="userComment" />
          </form>}
        </div>
        <p className="hr3">OPO</p>
      </div>
    )
  }
}

Event.propTypes = {
  deleteEvent: PropTypes.func,
  attendeesList: PropTypes.object
}

export default Event