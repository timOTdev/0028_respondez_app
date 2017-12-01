import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
    this.removeEvents = this.removeEvents.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }
  
  loadProfile() {
    this.setState({ userProfile: sampleProfile });
  }
  
  loadEvents() {
    this.setState({ eventsList: sampleEvents })
  }

  updateProfile(profile) {
    this.setState({ userProfile: profile });
  }

  removeProfile() {
    this.setState({ userProfile: {} });
  }

  removeEvents() {
    this.setState({ eventsList: {} });
  }

  addEvent(key) {
    const events = {...this.state.eventsList};
    const timeStamp = Date.now();
    events[`event-${timeStamp}`] = key;
    this.setState({eventsList: events })
  }
  
  removeEvent(key) {
    const events = {...this.state.eventsList};
    delete events[key];
    this.setState({eventsList: events})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Header {...this.state} loadProfile={this.loadProfile} removeProfile={this.removeProfile} />
            <Main {...this.state} loadEvents={this.loadEvents} removeEvents={this.removeEvents} updateProfile={this.updateProfile} addEvent={this.addEvent} removeEvent={this.removeEvent} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
