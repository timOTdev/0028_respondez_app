import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import Attendee from './Attendee'

class Event extends Component {
  rsvpYes = (e) => {
    e.preventDefault();
    const { id } = this.props
    const targetAttendees = this.props.eventsList[id].attendees
    const newAttendee = this.props.userProfile;

    this.props.addRsvp(id, newAttendee)
  }
  
  render() { 
    const { id } = this.props
    const targetAttendees = this.props.eventsList[id].attendees
    const rsvpButton = <button onClick={this.rsvpYes}>I'm in!</button>

    return (
    <div className="event">
      <h2>{this.props.details.eventName}</h2>
      <p>Date: {this.props.details.date}</p>
      <p>Time: {this.props.details.time}</p>
      <p>Location: {this.props.details.location}</p>
      <p>Details: {this.props.details.details}</p>
      <p>Creator: {this.props.details.creator}</p>

      <div>
        <h3>Attendees</h3>
        {(targetAttendees) ? targetAttendees.map( (attendee, i) => <Attendee key={i} attendee={attendee} />)
          : ""
        } 
      </div>

      {this.props.loggedIn && rsvpButton}
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

// DOUBLE STATE
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import '../style/style.css'

// import Attendee from './Attendee'

// class Event extends Component {
//   constructor() {
//     super()
//     this.rsvpYes = this.rsvpYes.bind(this)
//   }

//   rsvpYes(e) {
//     e.preventDefault();
//     console.log(e.target);
//   }

//   render() { 
//     const { eid } = this.props.details
//     const targetAttendees = this.props.attendeesList[eid]
//     const rsvpButton = <button onClick={(e) => this.rsvpYes(e)}>I'm going!</button>

//     return (
//     <div className="event">
//       <h2>{this.props.details.eventName}</h2>
//       <p>Date: {this.props.details.date}</p>
//       <p>Time: {this.props.details.time}</p>
//       <p>Location: {this.props.details.location}</p>
//       <p>Details: {this.props.details.details}</p>
//       <p>Creator: {this.props.details.creator}</p>

//       <div>
//         <h3>Attendees</h3>
//         {(targetAttendees) ? (Object.values(this.props.attendeesList[eid]).map( (attendee, i) => <Attendee details={attendee} key={i} />))
//           : ""
//         } 
//       </div>

//       {this.props.loggedIn && rsvpButton}
//       <hr id="divider" />
//     </div>
//     )
//   }
// }

// Event.propTypes = {
//   deleteEvent: PropTypes.func,
//   attendeesList: PropTypes.object
// }

// export default Event