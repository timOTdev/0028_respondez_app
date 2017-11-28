import React, { Component } from 'react'
import './App.css'
import App from './App'

function Event(props) {
  return ( 
    <div id={props.id}>
      <h1>{props.name}</h1>
      <h2>{props.time}</h2>
      <h3>{props.location}</h3>
      <p>{props.desc}</p>
      <p>{props.topics || null}</p>
    </div>
  );
}

class Events extends Component {
  render() {
    return (
      <div className="events">
        <hr id="divider" />
        <Event id="11" 
               name="Code & Coffee #09"
               time="Saturday, December 2, 2017, 12PM"
               location="Starbucks at One Loudoun"
               desc="November sure went by quick, pretty soon it will be X-mas before you know it!
               
               Come hang out and code before Jan and Feb weather hits. We've been working on pushing through courses and building projects. Some of us trying to still apply for jobs too. Whatever you're working on, come on through!
               
               Come and go as you please, new friends welcome, and have a good time!"
               topics="ReactJS, JavaScript, Productivity Hacks, Job Hunting"
        />  
        <hr id="divider" />
        <Event id="10" 
               name="Code & Coffee #08"
               time="Sunday, November 25, 2017, 12pm"
               location="Starbucks at One Loudoun"
               desc="Happy Thanksgiving everyone!
               Come share company with us over some coffee. We thankful for this space and the people that make up FCCA.
               
               Come hang out with us and discuss whatever projects you're working on or just to talk tech! Stay short or long, make friends, and get coding!"
               topics="React, ES6, Messenger Bots, Applying for jobs"
        />  
        <hr id="divider" />
        <Event id="9" 
               name="FIELD TRIP: DC Networking Event"
               time="Sunday, November 11, 2017"
               location="Starbucks at One Loudoun"
               desc="Link to the MeetUp event here: https://www.meetup.com/ITprofessionals/events/244235345/
               
               Hey guys, we're headed to a social/networking event for tech folks. We won't be having our Code and Coffee #08 this week obviously.
               
               - Leaving Wiehle-Reston East Metro station at 11AM
               - Arriving at Foggy-Bottom GWU station and walk over to the event
               - No specified end time for the event so I think we will stay until 3PM
               - Message me on PM or Flock if you need my phone number to link up
               
               -Tim"
        />  
      </div>
    )
  }
}

export default Events