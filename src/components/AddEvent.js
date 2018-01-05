import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-datetime'
import '../style/style.css'
import '../style/react-datetime.css'

class AddEvent extends Component {
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

  removeEvent = (e, key) => {
    const event = key;
    this.props.deleteEvent(event);
  }

  handleChange = (e, key) => {
    const event = this.props.eventsList[key];
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
    this.props.updateEvent(key, updatedEvent);
  }

  renderEvents = (key) => {
    const event = this.props.eventsList[key];
    return(
      <div className="renderEvents" key={key}>
          <input type="text" name="eventName" defaultValue={event.eventName} placeholder="Event Name" onInput={(e) => this.handleChange(e, key)} required />
          {/* <Calendar dateFormat='MMMM Do, YYYY' timeFormat={false} type="date" name="date" onInput={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required /> */}
          <input type="text" name="date" defaultValue={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required />
          {/* <Calendar timeFormat='h:mm a' dateFormat={false} type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required /> */}
          <input type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required />
          <input type="text" name="location" defaultValue={event.location} placeholder="Location" onChange={(e) => this.handleChange(e, key)} required />
          <textarea type="text" name="details" defaultValue={event.details} placeholder="Details" onChange={(e) => this.handleChange(e, key)} required />
          <button onClick={(e) => this.removeEvent(e, key)}>Remove Event</button>
      </div>
    )
  }
  
  render() {
    return (
      <div>
        <h1 className="header2">My Events</h1>
        <p className="hr2">O</p>

        <div className="myEvents">
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

          <div className="renderEvents">
            <button type="submit" onClick={this.props.toggleUpdateEvent}>Update Events</button>
            {this.props.showUpdateEvent ? (Object.keys(this.props.eventsList).map(this.renderEvents)) : null}
          </div>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  createEvent: PropTypes.func,
  // eventsList: PropTypes.array,
  toggleUpdateEvent: PropTypes.func,
  showUpdateEvent: PropTypes.bool
}
export default AddEvent
