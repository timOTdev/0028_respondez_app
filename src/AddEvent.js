import React, { Component } from 'react';
import './App.css';

class AddEvent extends Component {
  constructor() {
    super();
    this.saveEvent = this.saveEvent.bind(this);
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
      createdBy: this.createdBy.value,
    }

    console.log(event);
    this.props.addEvent(event);
    this.formReset.reset();
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
            <input type="text" ref={(input) => {this.location = input}} placeholder="Time" required />
          </label>

          <label>Details:
            <textarea ref={(input) => {this.details = input}} placeholder="Details" required />
          </label>

          <label>
            <p ref={(input) => {this.createdBy = input}}>Created By: {this.props.userProfile.firstName} {this.props.userProfile.lastName}</p>
          </label>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;
