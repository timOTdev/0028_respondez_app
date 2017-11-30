import React, { Component } from 'react';
import './App.css';

class MyProfile extends Component {
    render() {
      return (
        <div className="MyProfile">
          <div className="MyPicture">
            <img src={this.props.userProfile.profileUrl} alt={ (this.props.userProfile.firstName || "") + " " + (this.props.userProfile.lastName || "") } />
          </div>
          <div className="MyInfo">
            <p>Logged in as: {this.props.userProfile.firstName || "Not logged in"} {this.props.userProfile.lastName}</p>
            <button onClick={this.props.loadProfile}>Load sample profile/Log In</button>
          </div>

        </div>
      );
    }
  }

export default MyProfile;
