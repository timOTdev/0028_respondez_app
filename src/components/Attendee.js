import React from 'react'

import '../style/Events.css'

const Attendee = props => {
  const { avatar, bio, name, github, login } = props.attendee
  
  return (
    <div className="Attendee">
      <a href={github|| ""}  target="_blank" >
        <img src={avatar || ""} 
             alt={name || login}  
             title={bio} />
      </a>
      <p>{name || login}</p> 
    </div>
  )
}

export default Attendee