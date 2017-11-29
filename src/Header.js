import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MyProfile from './MyProfile'

class Header extends Component {
    render() {
      return (
        <div>
          <header>
            <MyProfile />

            <div>
              <p><Link to='/'>Show Events</Link></p>
              <p><Link to='/add-event'>Add Event</Link></p>
              <p><Link to='/add-rsvp'>Add My RSVP</Link></p>
            </div>
          </header>
        </div>
      )
    }
  }

export default Header;


