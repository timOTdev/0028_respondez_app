import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MyProfile from './MyProfile'

class Header extends Component {
    render() {
      return (
        <div>
          <header>
            <MyProfile {...this.props}/>

            {/* <div>
              <p><Link to='/'>Show Events</Link></p>
              <p><Link to='/add-profile'>Add Profile</Link></p>
              <p><Link to='/add-event'>Add Event</Link></p>
            </div> */}

            <hr id="divider" />
          </header>
        </div>
      )
    }
  }

export default Header;


