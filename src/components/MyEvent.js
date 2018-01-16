import React from 'react'

import '../style/MyEvents.css'

const MyEvent = (props) => {
  const { eventName, date, time, location } = props.details

  return (
    <div title={location}>
      <h3 className="underline gold">{eventName}</h3>
      <p className="white">{date} @ {time}</p>
      <hr />
    </div>
  )
}

export default MyEvent 