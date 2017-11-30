import React, { Component } from 'react';
import './App.css';

class CurrentProfile extends Component {
    render() {
      return (
        <div>
          <div className="currentProfile">
            <div className="currentPicture">
              <img src={this.props.userProfile.profileUrl} alt={ (this.props.userProfile.firstName || "") + " " + (this.props.userProfile.lastName || "") } />
            </div>

            <div className="currentInfo">
              <p>User: {this.props.userProfile.firstName || "Not logged in"} {this.props.userProfile.lastName}</p>
            </div>
          </div>

          <button onClick={this.props.loadProfile}>Log In</button>
        </div>
      );
    }
  }

export default CurrentProfile;
