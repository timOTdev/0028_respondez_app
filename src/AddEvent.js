import React, { Component } from 'react';
import './App.css';

class AddEvent extends Component {
    render() {
      return (
        <div>
          <h1>Add Event</h1>
          <form ref={(input) => this.formReset = input} className="ProfileForm" onSubmit={this.saveProfile}>

          <label>Event Name:
            <input type="text" ref={(input) => (this.profileUrl = input)} placeholder="Event Name" required />
          </label>

          <label>Date:
            <input type="text" ref={(input) => {this.firstName = input}} placeholder="Date" required />
          </label>

          <label>Time:
            <input type="text" ref={(input) => {this.lastName = input}} placeholder="Time" required />
          </label>

          <label>Details:
            <textarea ref={(input) => {this.aboutMe = input}} placeholder="Details" required />
          </label>

          <label>Created By:{this.props.userProfile.firstName} {this.props.userProfile.lastName}
          </label>

          <button type="submit">Save Changes</button>
          </form>
        </div>
      );
    }
  }

export default AddEvent;
