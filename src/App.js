import React, { Component } from 'react'
import update from 'react-addons-update';
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import Header from './Header'
import Main from './Main'
import sampleEvents from './sampleEvents'
import sampleProfile from './sampleProfile'
import sampleAttendees from './sampleAttendees'
import { base } from './base'

class App extends Component {
  constructor() {
    super();
    this.loadEvents = this.loadEvents.bind(this);
    this.loadAttendees = this.loadAttendees.bind(this);
    this.loadProfile = this.loadProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.logOut = this.logOut.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.addRsvp = this.addRsvp.bind(this);
    this.toggleUpdateProfile = this.toggleUpdateProfile.bind(this);
    this.toggleUpdateEvent = this.toggleUpdateEvent.bind(this);
    this.toggleDisplayMain = this.toggleDisplayMain.bind(this);
    this.state = {
      userProfile: {},
      eventsList: {},
      attendeesList: {},
      showUpdateProfile: false,
      showUpdateEvent: false,
      showMain: false
    }
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
    this.setState({ eventsList: events })
  }
  
  loadAttendees() {
    const attendees = {...this.state.attendeesList, ...sampleAttendees};
    this.setState({ attendeesList: attendees })
  }

  loadProfile() {
    this.setState({ userProfile: sampleProfile });
  }

  updateProfile(profile) {
    let newProfile = {...this.state.userProfile};
    newProfile = profile;
    this.setState({ userProfile: newProfile, showMain: true });
  }

  logOut() {
    this.setState({ userProfile: {}, showMain: false })
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

  addRsvp(targetEvent, uid, newAttendee) {
    // const currentAttendees = {...this.state.EventsList[targetEvent]}
    // currentAttendees.attendees[uid] = newAttendee;
    // this.setState({ eventsList: currentAttendees })
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
              updateProfile={this.updateProfile} 
              logOut={this.logOut} 
              deleteProfile={this.deleteProfile} 
              toggleDisplayMain={this.toggleDisplayMain}
            />
            <Main 
              {...this.state} 
              loadEvents={this.loadEvents} 
              loadAttendees={this.loadAttendees} 
              updateProfile={this.updateProfile} 
              createEvent={this.createEvent} 
              updateEvent={this.updateEvent}
              deleteEvent={this.deleteEvent} 
              addRsvp={this.addRsvp}
              toggleUpdateEvent={this.toggleUpdateEvent}
              toggleUpdateProfile={this.toggleUpdateProfile}
            />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
