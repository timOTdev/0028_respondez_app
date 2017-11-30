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
    
    const profile = {
      profileUrl: this.profileUrl.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      aboutMe: this.aboutMe.value,
      myInterests: this.myInterests.value,
    }

    console.log(profile);
    this.props.updateProfile(profile);
    this.formReset.reset();
  }

  render() {
    return (
      <div>
        <div>
          <p>Current information:</p>
          <p>Profile Picture URL: {this.props.userProfile.profileUrl || "None"}</p>
          <p>First Name: {this.props.userProfile.firstName || "None"}</p>
          <p>Last Name: {this.props.userProfile.lastName || "None"}</p>
          <p>About Me: {this.props.userProfile.aboutMe || "None"}</p>
          <p>My Interestes: {this.props.userProfile.myInterests || "None"}</p>
          
        </div>
        <form ref={(input) => this.formReset = input} className="ProfileForm" onSubmit={this.saveProfile}>
          <h1>Add Profile</h1>

          <label>Profile Picture URL:
            <input type="text" ref={(input) => (this.profileUrl = input)} placeholder="Picture URL" required />
            <p>Recommend using your twitter picture URL as this is easiest but other social media sites are possible.</p>
          </label>

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
            <select ref={(input) => {this.myInterests = input}}>
              <option defaultValue>Web Development</option>
              <option>Mobile Development</option>
              <option>UI/UX Design</option>
              <option>Project Management</option>
              <option>Dev Ops</option>
            </select>
          </label>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default AddProfile;
