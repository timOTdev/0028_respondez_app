import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-datetime'

import '../style/style.css'
import '../style/react-datetime.css'

class CreateEvents extends Component {
  saveEvent = (e) => {
    e.preventDefault()
    var dateExtract = e.target[1].getAttribute("value")
    var timeExtract = e.target[2].getAttribute("value")
    const timeStamp = Date.now()
    const event = {
      eid: `event${timeStamp}`,
      eventName: this.eventName.value,
      date: dateExtract,
      time: timeExtract,
      location: this.location.value,
      details: this.details.value,
      creator: this.props.userProfile.name,
      uid: this.props.userProfile.uid
      // date: this.date.value,
      // time: this.time.value,
    }
    this.props.createEvent(event)
    this.formReset.reset()
  }

  renderForm = () => {
    const memoIcon = <span role="img" aria-label="memo icon">&#128221;</span>
    const calendarIcon = <span role="img" aria-label="calendar icon">&#128197;</span>
    const watchIcon = <span role="img" aria-label="watch icon">&#8986;</span>
    const buildingIcon = <span role="img" aria-label="office building icon">&#127970;</span>
    const penIcon = <span role="img" aria-label="lower left fountain pen icon">&#128395;</span>
    const checkmarkIcon = <span role="img" aria-label="heavy check mark icon">&#10004;</span>

    return (
      <form className="eventForm" ref={(input) => this.formReset = input} onSubmit={(e) => this.saveEvent(e)}>
        <label>{memoIcon} Event Name
          <input type="text" ref={(input) => (this.eventName = input)} required />
        </label>

        <label>{calendarIcon} Date
          <Calendar dateFormat='MMMM Do, YYYY' timeFormat={false} ref={(input) => {this.date = input}} required/>
          {/* <input type="text" ref={(input) => {this.date = input}} placeholder="Date" required /> */}
        </label>

        <label>{watchIcon} Time
          <Calendar timeFormat='h:mm a' dateFormat={false} ref={(input) => {this.date = input}} required/>
          {/* <input type="text" ref={(input) => {this.time = input}} placeholder="Time" required /> */}
        </label>

        <label>{buildingIcon} Location
          <input type="text" ref={(input) => {this.location = input}} required />
        </label>

        <label>{penIcon} Details
          <textarea ref={(input) => {this.details = input}} required />
        </label>

        <button className="eventsSmallButton" type="submit">{checkmarkIcon} Save</button>
      </form>
    )
  }

  render() {
    const { toggleCreateEvents, showCreateEvents } = this.props
    
    return (
      <div className="renderForm">
        <button className="eventsLargeButton" type="submit" onClick={toggleCreateEvents}>Create Events</button>
        {showCreateEvents ? this.renderForm() : null}
      </div>
    )
  }
}

CreateEvents.propTypes = {
  saveEvent: PropTypes.func,
}
 
export default CreateEvents