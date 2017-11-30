import React, { Component } from 'react';
import './App.css';

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

class ShowEvents extends Component {
  render() {
    return (
      <div className="events">
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
        <button onClick={this.props.loadEvents}>Load sample events</button>
      </div>
    )
  }
}

export default ShowEvents;