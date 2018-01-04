import React, { Component } from 'react'
import '../style/style.css'

class Attendee extends Component {
  render() {
    const link = this.props.github
    const link2 = this.props.repo
    console.log(link, link2);
    return (
      <div className="Attendee">
        <a href={this.props.attendee.github|| ""}  target="_blank" >
          <img src={this.props.attendee.avatar || ""} 
            alt={this.props.attendee.name || ""}  title={this.props.attendee.bio} />
        </a>
        <p>{this.props.attendee.name || ""}</p> 
      </div>
    )
  }
}

export default Attendee