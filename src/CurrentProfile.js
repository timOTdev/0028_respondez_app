import React, { Component } from 'react';
import './App.css';
import blankPicture from './blank-picture.png';

class CurrentProfile extends Component {
    render() {
      return (
        <div>
          <div className="currentProfile">
            <div className="currentPicture">
              <img src={this.props.userProfile.profileUrl || blankPicture} alt={ (this.props.userProfile.firstName || "") + " " + (this.props.userProfile.lastName || "") } />
            </div>

            <div className="currentInfo">
              <p>{this.props.userProfile.firstName || "Not logged in"} {this.props.userProfile.lastName}</p>
            </div>
          </div>
          
          <input placeholder="firstName"></input>
          <input placeholder="lastName"></input>
          <input placeholder="password"></input>
          <div>
          <button onClick={this.props.loadProfile}>Log In</button>
          <button onClick={this.props.removeProfile}>Logout</button>
          </div>
        </div>
      );
    }
  }

export default CurrentProfile;
