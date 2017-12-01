import React, { Component } from 'react';
import './App.css';

class AddEvent extends Component {
  constructor() {
    super();
    this.saveEvent = this.saveEvent.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  }

  saveEvent(e) {
    e.preventDefault();
    alert('You saved your event!')
    
    const event = {
      eventName: this.eventName.value,
      date: this.date.value,
      time: this.time.value,
      location: this.location.value,
      details: this.details.value,
      creator: this.creator.value,
    }

    console.log(event);
    this.props.addEvent(event);
    this.formReset.reset();
  }

  handleChange(e, key) {
    const event = this.props.eventsList[key];
    const updatedEvent = {
      ...event,
      [e.target.name] : e.target.value
    }
    this.props.updateEvent(key, updatedEvent);
  }

  renderEvents(key) {
    const event = this.props.eventsList[key];
    return(
      <div className="renderEvents" key={key}>
          <input type="text" name="eventName" defaultValue={event.eventName} placeholder="Event Name" onChange={(e) => this.handleChange(e, key)} required />
          <input type="text" name="date" defaultValue={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required />
          <input type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required />
          <input type="text" name="location" defaultValue={event.location} placeholder="Location" onChange={(e) => this.handleChange(e, key)} required />
          <textarea type="text" name="details" defaultValue={event.details} placeholder="Details" onChange={(e) => this.handleChange(e, key)} required />
          <input type="text" name="creator" defaultValue={event.creator} placeholder="Creator" onChange={(e) => this.handleChange(e, key)} required/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Add Event</h1>
        <form className="eventForm" ref={(input) => this.formReset = input} onSubmit={(e) => this.saveEvent(e)}>
          <label>Event Name:
            <input type="text" ref={(input) => (this.eventName = input)} placeholder="Event Name" required />
          </label>

          <label>Date:
            <input type="text" ref={(input) => {this.date = input}} placeholder="Date" required />
          </label>

          <label>Time:
            <input type="text" ref={(input) => {this.time = input}} placeholder="Time" required />
          </label>

          <label>Location:
            <input type="text" ref={(input) => {this.location = input}} placeholder="Location" required />
          </label>

          <label>Details:
            <textarea ref={(input) => {this.details = input}} placeholder="Details" required />
          </label>

          <label>
            <p ref={(input) => {this.creator = input}}>Creator: {this.props.userProfile.firstName} {this.props.userProfile.lastName}</p>
          </label>
          <button type="submit">Save Changes</button>
        </form>

        <div className="renderEvents">
          <h1>Update Event</h1>
          {Object.keys(this.props.eventsList).map(this.renderEvents)}
        </div>
      </div>
    );
  }
}

export default AddEvent;
