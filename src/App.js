import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Main from './Main';
import sampleEvents from './sampleEvents'
import sampleProfile from './sampleProfile'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfile: {},
      eventsList: {}
    }
    this.loadProfile = this.loadProfile.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
  }
  
  loadProfile() {
    this.setState({ userProfile: sampleProfile })
  }
  
  loadEvents() {
    this.setState({ eventsList: sampleEvents })
  }

  updateProfile(profile) {
    this.setState({ userProfile: profile })
  }

  removeProfile() {
    this.setState({ userProfile: {} })
  }

  render() {
    return (
        <div>
            <Header {...this.state} loadProfile={this.loadProfile} />
            <Main {...this.state} loadEvents={this.loadEvents} updateProfile={this.updateProfile} removeProfile={this.removeProfile}/>
        </div>
    )
  }
}

export default App;
