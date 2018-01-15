import React from 'react'

import '../style/style.css'

const Attendee = props => {
  const { avatar, bio, name, github, login } = props.attendee
  login
  return (
    <div className="Attendee">
      <a href={github|| ""}  target="_blank" >
        <img src={avatar || ""} 
          alt={name || ""}  title={bio} />
      </a>
      <p>{name || login}</p> 
    </div>
  )
}

export default Attendee