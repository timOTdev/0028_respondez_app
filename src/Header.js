import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <p><Link to='/'>Show Events</Link></p>
            <p><Link to='/add-event'>Add Event</Link></p>
            <p><Link to='/add-rsvp'>Add My RSVP</Link></p>
          </header>
        </div>
      )
    }
  }

export default Header;


