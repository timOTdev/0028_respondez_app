import React, { Component } from 'react';
import './App.css';
import tim from './tim.jpg';

class MyProfile extends Component {
    render() {
      return (
        <div className="MyProfile">
          <div className="MyPicture">
            <img src={tim} alt="Tim"/>
          </div>
          <div className="MyInfo">
            <p>Name: {this.props.userProfile.firstName} {this.props.userProfile.lastName}</p>
            <p>About Me: {this.props.userProfile.aboutMe}</p>
            <p>Interests: {this.props.userProfile.myInterests}</p>
          </div>
        </div>
      );
    }
  }

export default MyProfile;
