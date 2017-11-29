import React, { Component } from 'react';
import './App.css';

class AddProfile extends Component {
  constructor() {
    super();
    this.saveProfile = this.saveProfile.bind(this);
  }

  saveProfile(e) {
    e.preventDefault();
    alert('You saved your profile!')
    console.log(this.firstName.value)
    console.log(this.lastName.value)
    console.log(this.aboutMe.value)
    console.log(this.myInterests.value)
  }

  render() {
    return (
      <div>
        <form className="ProfileForm" onSubmit={this.saveProfile}>
          <h1>Add Profile</h1>

          <label>First Name:
          <input type="text" ref={(input) => {this.firstName = input}} placeholder="First Name" required />
          </label>

          <label>Last Name:
          <input type="text" ref={(input) => {this.lastName = input}} placeholder="Last Name" required />
          </label>


          <label>About Me:
            <textarea ref={(input) => {this.aboutMe = input}} placeholder="Tell us about your favorite coding languages and what you would like to get out of the group." required />
          </label>

          <label>My Interests:
            <select ref={(input) => {this.myInterests = input}} >
              <option defaultValue>Web Development</option>
              <option>Mobile Development</option>
              <option>Dev Ops</option>
              <option>UI/UX Design</option>
              <option>Project Management</option>
            </select>
          </label>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default AddProfile;
