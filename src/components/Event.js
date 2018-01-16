import React from 'react'

import '../style/Events.css'
import Attendees from './Attendees'
import Comments from './Comments'

const Event = (props) => {
  const { eventName, date, time, location, creator, details } = props.details
  
  return (
    <div className="event">
      <h2>{eventName}</h2>
      <p>Date: <span className="white">{date}</span></p>
      <p>Time: <span className="white">{time}</span></p>
      <p>Location: <span className="white">{location}</span></p>
      <p>Creator: <span className="white">{creator}</span></p>
      <p>Details: <span className="white">{details}</span></p>
      
      <Attendees {...props} />

      <Comments {...props} />
    </div>
  )
}

export default Event