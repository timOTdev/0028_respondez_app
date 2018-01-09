import React from 'react'

import '../style/style.css'

const Attendee = props => {
  const { github, avatar, name, bio } = props.attendee
  
  return (
    <div className="Attendee">
      <a href={github|| ""}  target="_blank" >
        <img src={avatar || ""} 
          alt={name || ""}  title={bio} />
      </a>
      <p>{name || ""}</p> 
    </div>
  )
}

export default Attendee