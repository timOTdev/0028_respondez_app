import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import '../style/style.css'
import '../style/react-datetime.css'

class UpdateEvents extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.EventsList !== nextProps.eventsList
     || this.state.EventsList !== nextState.eventsList
  }
  
  removeEvent = (e, key) => {
    const { uid } = this.props.userProfile
    const eidFromEventDetails = this.props.attendList[uid][key].eid
    this.props.deleteEvent(key, eidFromEventDetails)
  }

  confirmDelete = (e, key) => {
    const event = this.props.eventsList[key]

    confirmAlert({
    title: `${(<p role="img" aria-label="thinking face icon">&#129300;</p>).props.children} Delete event?`,
      message: `"${event.eventName}" will also be deleted from the personal list of all users that attended this event.`,
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
      onConfirm: () => this.removeEvent(e, key),
    })
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
          <label>
            <input type="text" name="eventName" defaultValue={event.eventName} placeholder="Event Name" onInput={(e) => this.handleChange(e, key)} required />
          </label>
          
          <label>
            <input type="text" name="date" defaultValue={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required />
            {/* <Calendar dateFormat='MMMM Do, YYYY' timeFormat={false} type="date" name="date" onInput={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required /> */}
          </label>


          <label>
            <input type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required />
            {/* <Calendar timeFormat='h:mm a' dateFormat={false} type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required /> */}
          </label>

          <label>
            <input type="text" name="location" defaultValue={event.location} placeholder="Location" onChange={(e) => this.handleChange(e, key)} required />
          </label>

          <label>
            <textarea type="text" name="details" defaultValue={event.details} placeholder="Details" onChange={(e) => this.handleChange(e, key)} required />
          </label>

          <button className="eventsSmallButton" onClick={(e) => this.confirmDelete(e, key)} type="button"><span role="img" aria-label="cross mark icon">&#10060;</span>Remove</button>
      </div>
    )
  }

  render() {
    const { toggleUpdateEvents, showUpdateEvents, eventsList } = this.props
    const { uid } = this.props.userProfile

    return (
      <div className="renderEvents">
        <button className="eventsLargeButton" type="submit" onClick={toggleUpdateEvents}>Update Events</button>
        {showUpdateEvents ? (Object.keys(eventsList)
            .filter(key => uid === this.props.eventsList[key].uid)
            .slice(0, 3)
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
