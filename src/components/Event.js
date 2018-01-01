import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import Attendee from './Attendee'

class Event extends Component {
  constructor() {
    super()
    this.rsvpYes = this.rsvpYes.bind(this)
  }

  rsvpYes() {
    // const targetEvent = this.props.id.eid
    // const newAttendee = {
    //   name: this.props.userProfile.name,
    //   avatar: this.props.userProfile.avatar
    // }
    
    // this.props.addRsvp(targetEvent, newAttendee);
    // this.props.addRsvp(attendee)
  }

  render() { 
    // const rsvpButton = <button onClick={this.rsvpYes}>I'm going!</button>
    // const targetEvent = this.props.eventsList[id]
    // const attendees = this.props.attendeesList["event11"]
    // console.log(targetEvent)
    // var targetEvent = ["this.props.eventsList[\"" + event + "\"].attendees"]

    // const { postId } = state.match.params;
    // const i = state.posts.findIndex((post) => post.code === postId)
    // const post = state.posts[i];
    // const postComments = state.comments[postId] || [];

    const { eid } = this.props.details
    const targetAttendees = this.props.attendeesList[eid]

    // console.log(targetAttendees)

    return (
    <div className="event">
      <h2>{this.props.details.eventName}</h2>
      <p>Date: {this.props.details.date}</p>
      <p>Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location}</p>
      <p>Details: {this.props.details.details}</p>
      <p>Creator: {this.props.details.creator}</p>

      {/* {this.props.loggedIn && rsvpButton} */}

      <div>
        <h3>Attendees</h3>
        {(targetAttendees) ? (Object.values(this.props.attendeesList[eid]).map( (attendee, i) => <Attendee details={attendee} key={i} />))
          : ""
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