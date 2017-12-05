import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Main from './Main'
import sampleEvents from './sampleEvents'
import sampleProfile from './sampleProfile'
import sampleAttendees from './sampleAttendees'
import { base } from './base'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfile: {},
      eventsList: {},
      attendeesList: {},
      showUpdateProfile: false,
      showUpdateEvent: false,
      showMain: false
    }
    this.loadProfile = this.loadProfile.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
    // this.removeEvents = this.removeEvents.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.displayUpdateProfile = this.displayUpdateProfile.bind(this);
    this.displayUpdateEvent = this.displayUpdateEvent.bind(this);
    this.toggleDisplayMain = this.toggleDisplayMain.bind(this);
  }
  
  componentWillMount() {
    this.eventsRef = base.syncState('eventsList',
    {
      context: this,
      state: 'eventsList'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.eventsRef);
  }

  loadProfile() {
    this.setState({ userProfile: sampleProfile });
  }
  
  loadEvents() {
    const events = {...this.state.eventsList, ...sampleEvents};
    const attendees = {...this.state.attendeesList, ...sampleAttendees};
    this.setState({ eventsList: events, attendeesList: attendees })
  }

  updateProfile(profile) {
    this.setState({ userProfile: profile });
  }

  updateEvent(key, updatedEvent) {
    const events = {...this.state.eventsList};
    events[key] = updatedEvent;
    this.setState({ eventsList: events});
  }

  removeProfile() {
    this.setState({ userProfile: {} });
  }

  // removeEvents() {
  //   this.setState({ eventsList: {}, attendeesList: {} });
  // }

  addEvent(key) {
    const timeStamp = Date.now();
    const events = {...this.state.eventsList};

    events[`event-${timeStamp}`] = key;
    this.setState({eventsList: events})
  }
  
  removeEvent(key) {
    const events = {...this.state.eventsList};
    events[key] = null;
    this.setState({eventsList: events})
  }

  displayUpdateProfile() {
    this.setState({showUpdateProfile: !this.state.showUpdateProfile})
  }

  displayUpdateEvent() {
    this.setState({showUpdateEvent: !this.state.showUpdateEvent})
  }
  
  toggleDisplayMain() {
    this.setState({showMain: !this.state.showMain})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Header 
              {...this.state} 
              loadProfile={this.loadProfile} 
              removeProfile={this.removeProfile} 
              toggleDisplayMain={this.toggleDisplayMain}
            />
            <Main 
              {...this.state} 
              loadEvents={this.loadEvents} 
              // removeEvents={this.removeEvents} 
              updateProfile={this.updateProfile} 
              updateEvent={this.updateEvent}
              addEvent={this.addEvent} 
              removeEvent={this.removeEvent} 
              displayUpdateProfile={this.displayUpdateProfile}
              displayUpdateEvent={this.displayUpdateEvent}
            />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
