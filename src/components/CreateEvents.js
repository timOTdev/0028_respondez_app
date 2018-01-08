import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-datetime'

import '../style/style.css'
import '../style/react-datetime.css'

class CreateEvents extends Component {
  saveEvent = (e) => {
    e.preventDefault();
    var dateExtract = e.target[1].getAttribute("value");
    var timeExtract = e.target[2].getAttribute("value");
    const timeStamp = Date.now();
    const event = {
      eid: `event${timeStamp}`,
      eventName: this.eventName.value,
      date: dateExtract,
      time: timeExtract,
      location: this.location.value,
      details: this.details.value,
      creator: this.props.userProfile.name,
      // date: this.date.value,
      // time: this.time.value,
    }
    this.props.createEvent(event);
    this.formReset.reset();
  }

  renderForm = () => {
    return (
      <form className="eventForm" ref={(input) => this.formReset = input} onSubmit={(e) => this.saveEvent(e)}>
        <label><span role="img" aria-label="Memo Icon">&#128221;</span> Event Name
          <input type="text" ref={(input) => (this.eventName = input)} required />
        </label>

        <label><span role="img" aria-label="Calendar Icon">&#128197;</span> Date
          <Calendar dateFormat='MMMM Do, YYYY' timeFormat={false} ref={(input) => {this.date = input}} required/>
          {/* <input type="text" ref={(input) => {this.date = input}} placeholder="Date" required /> */}
        </label>

        <label><span role="img" aria-label="Watch Icon">&#8986;</span> Time
          <Calendar timeFormat='h:mm a' dateFormat={false} ref={(input) => {this.date = input}} required/>
          {/* <input type="text" ref={(input) => {this.time = input}} placeholder="Time" required /> */}
        </label>

        <label><span role="img" aria-label="Building Icon">&#127970;</span> Location
          <input type="text" ref={(input) => {this.location = input}} required />
        </label>

        <label><span role="img" aria-label="Pen Icon">&#128395;</span> Details
          <textarea ref={(input) => {this.details = input}} required />
        </label>

        <button type="submit">Save Changes</button>
      </form>
    )
  }

  render() {
    return (
      <div className="renderForm">
        <button type="submit" onClick={this.props.toggleCreateEvents}>Create Events</button>
        {this.props.showCreateEvents ? this.renderForm() : null}
      </div>
    )
  }
}
 
export default CreateEvents