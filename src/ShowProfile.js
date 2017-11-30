import React, { Component } from 'react';
import './App.css';

class ShowProfile extends Component {
  render() {
    return (
      <div className="showProfile">
        <h1>Current Profile</h1>

        <div>
          <p>First Name: {this.props.userProfile.firstName || "None"}</p>
          <p>Last Name: {this.props.userProfile.lastName || "None"}</p>
          <p>About Me: {this.props.userProfile.aboutMe || "None"}</p>
          <p>My Interests: {this.props.userProfile.myInterests || "None"}</p>
          <p>Picture URL: <a href={this.props.userProfile.profileUrl} target="_blank">Link</a></p>
        </div>
        
        <button>Add Profile</button>
        <button onClick={this.props.removeProfile}>Remove</button>
      </div>
    );
  }
}

export default ShowProfile;
