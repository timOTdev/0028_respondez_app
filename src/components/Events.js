import React from 'react'

import '../style/style.css'
import Event from './Event'

const Events = props => (
  <div className="events">
    <h1 className="header2">Events</h1>
    <p className="hr2">OPO</p>

    <div className="events">
      { 
        Object.keys(props.eventsList)
          .slice(0, 3)
          .map(key => <Event key={key} eventId={key} {...props} details={props.eventsList[key]} />)
      }
    </div>
    
    <button onClick={props.loadEvents}>Load Samples</button>
  </div>
)

export default Events