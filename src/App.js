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
    this.loadEvents = this.loadEvents.bind(this);
    // this.deleteEvents = this.deleteEvents.bind(this);
    this.loadProfile = this.loadProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.toggleUpdateProfile = this.toggleUpdateProfile.bind(this);
    this.toggleUpdateEvent = this.toggleUpdateEvent.bind(this);
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

  loadEvents() {
    const events = {...this.state.eventsList, ...sampleEvents};
    const attendees = {...this.state.attendeesList, ...sampleAttendees};
    this.setState({ eventsList: events, attendeesList: attendees })
  }

  // deleteEvents() {
  //   this.setState({ eventsList: {}, attendeesList: {} });
  // }

  loadProfile() {
    this.setState({ userProfile: sampleProfile });
  }

  updateProfile(profile) {
    this.setState({ userProfile: profile });
  }

  deleteProfile() {
    this.setState({ userProfile: {} });
  }

  createEvent(key) {
    const timeStamp = Date.now();
    const events = {...this.state.eventsList};

    events[`event-${timeStamp}`] = key;
    this.setState({eventsList: events})
  }

  updateEvent(key, updatedEvent) {
    const events = {...this.state.eventsList};
    events[key] = updatedEvent;
    this.setState({ eventsList: events});
  }

  deleteEvent(key) {
    const events = {...this.state.eventsList};
    events[key] = null;
    this.setState({eventsList: events})
  }

  toggleUpdateProfile() {
    this.setState({showUpdateProfile: !this.state.showUpdateProfile})
  }

  toggleUpdateEvent() {
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
              deleteProfile={this.deleteProfile} 
              toggleDisplayMain={this.toggleDisplayMain}
            />
            <Main 
              {...this.state} 
              loadEvents={this.loadEvents} 
              // deleteEvents={this.deleteEvents} 
              updateProfile={this.updateProfile} 
              createEvent={this.createEvent} 
              updateEvent={this.updateEvent}
              deleteEvent={this.deleteEvent} 
              toggleUpdateEvent={this.toggleUpdateEvent}
              toggleUpdateProfile={this.toggleUpdateProfile}
            />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
