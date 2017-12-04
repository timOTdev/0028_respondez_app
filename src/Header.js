import React, { Component } from 'react';
import './App.css';
import CurrentProfile from './CurrentProfile'

class Header extends Component {
    render() {
      return (
        <div>
          <header>
            <CurrentProfile {...this.props} toggleDisplayMain={this.props.toggleDisplayMain}/>

            <hr id="divider" />
          </header>
        </div>
      )
    }
  }

export default Header;


