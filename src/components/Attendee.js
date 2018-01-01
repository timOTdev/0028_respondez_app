import React, { Component } from 'react'
import '../style/style.css'

class Attendee extends Component {
  render() {
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