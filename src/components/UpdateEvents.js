import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import '../style/react-datetime.css'

class UpdateEvents extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.EventsList !== nextProps.eventsList
     || this.state.EventsList !== nextState.eventsList
  }

  removeEvent = (e, key) => {
    const event = key
    this.props.deleteEvent(event)
  }

  handleChange = (e, key) => {
    const event = this.props.eventsList[key]
    const updatedEvent = {
      ...event,
      [e.target.name] : e.target.value
      // eventName: this.eventName.value,
      // date: dateExtract,
      // date: this.date.value,
      // time: timeExtract,
      // time: this.time.value,
      // location: this.location.value,
      // details: this.details.value,
      // creator: this.creator.value,
    }
    this.props.updateEvent(key, updatedEvent)
  }
  
  renderEvents = (key) => {
    const event = this.props.eventsList[key]
    
    return(
      <div className="renderEvents" key={key}>
          <input type="text" name="eventName" defaultValue={event.eventName} placeholder="Event Name" onInput={(e) => this.handleChange(e, key)} required />
          {/* <Calendar dateFormat='MMMM Do, YYYY' timeFormat={false} type="date" name="date" onInput={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required /> */}
          <input type="text" name="date" defaultValue={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required />
          {/* <Calendar timeFormat='h:mm a' dateFormat={false} type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required /> */}
          <input type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required />
          <input type="text" name="location" defaultValue={event.location} placeholder="Location" onChange={(e) => this.handleChange(e, key)} required />
          <textarea type="text" name="details" defaultValue={event.details} placeholder="Details" onChange={(e) => this.handleChange(e, key)} required />
          <button onClick={(e) => this.removeEvent(e, key)}><span role="img" aria-label="cross mark icon">	&#10060;</span> Remove</button>
      </div>
    )
  }

  render() {
    const { toggleUpdateEvents, showUpdateEvents, eventsList } = this.props
    const { uid } = this.props.userProfile

    return (
      <div className="renderEvents">
        <button type="submit" onClick={toggleUpdateEvents}>Update Events</button>
        {showUpdateEvents ? (Object.keys(eventsList)
            .filter(key => uid === this.props.eventsList[key].uid)
            .map(this.renderEvents)) 
          : undefined}
      </div>
    )
  }
}  

UpdateEvents.propTypes = {
  removeEvent: PropTypes.func,
  handleChange: PropTypes.func,
  createEvent: PropTypes.func,
  toggleUpdateEvent: PropTypes.func,
  showUpdateEvent: PropTypes.bool
}

export default UpdateEvents
