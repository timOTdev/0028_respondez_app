import React, { Component } from 'react'
import '../style/style.css'

class Attendee extends Component {
  render() {
    // const reactKey = this.props.reactKey
    // const build = "this.props.details.attendees[" + reactKey + "]"
    // const buildName = build + ".name"
    // const buildAvatar = build + ".avatar"
    // const event = this.props.id 
    // const targetEvent = "this.props.details.attendees[" + reactKey + "].name"
    // const test = this.props.details.attendees[reactKey].name
    // console.log(targetEvent);
    // console.log(build)
    // console.log(buildName)
    // console.log(buildAvatar)

    return (
      <div className="Attendee">
        <img src={this.props.details.avatar || ""} 
              alt={this.props.details.name || ""} />
        <p>{this.props.details.name || ""}</p> 
      </div>
    )
  }
}

export default Attendee

// $r.state.eventsList["event-1512851350090"].attendees["TQVJHDSNCNO7Jg1biXIM7vp3bCj2"].name