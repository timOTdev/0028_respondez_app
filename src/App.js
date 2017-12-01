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
    this.updateProfile = this.updateProfile.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
    this.addEvent = this.addEvent.bind(this);
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

  addEvent(event) {
    const events = {...this.state.eventsList};
    const timeStamp = Date.now();
    events[`event-${timeStamp}`] = event;
    this.setState({eventsList: events })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Header {...this.state} loadProfile={this.loadProfile} removeProfile={this.removeProfile} />
            <Main {...this.state} loadEvents={this.loadEvents} updateProfile={this.updateProfile} addEvent={this.addEvent}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
