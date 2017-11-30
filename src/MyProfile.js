import React, { Component } from 'react';
import './App.css';

class MyProfile extends Component {
    render() {
      return (
        <div className="MyProfile">
          <div className="MyPicture">
            <img src={this.props.userProfile.profileUrl} alt={this.props.userProfile.firstName + " " + this.props.userProfile.lastName} />
          </div>
          <div className="MyInfo">
            <p>Name: {this.props.userProfile.firstName} {this.props.userProfile.lastName}</p>
            <p>About Me: {this.props.userProfile.aboutMe}</p>
            <p>Interests: {this.props.userProfile.myInterests}</p>
          </div>

          <hr id="divider" />
        </div>
      );
    }
  }

export default MyProfile;
