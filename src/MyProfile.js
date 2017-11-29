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
            <p>Name: Timothy Hoang</p>
            <p>Interests: JavaScript, ES6, React</p>
          </div>
        </div>
      );
    }
  }

export default MyProfile;
