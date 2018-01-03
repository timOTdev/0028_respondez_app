import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import update from 'immutability-helper'
import update from 'update-immutable'
import '../style/style.css'

import Header from './Header'
import Main from './Main'
import sampleEvents from '../data/sampleEvents'
// import sampleAttendees from '../data/sampleAttendees'
// import sampleProfile from '../data/sampleProfile'
import { app, base } from '../helpers/base'

class App extends Component {
  constructor() {
    super();
    this.loadEvents = this.loadEvents.bind(this);
    // this.loadAttendees = this.loadAttendees.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    // this.loadProfile = this.loadProfile.bind(this);
    // this.deleteProfile = this.deleteProfile.bind(this);
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
      // attendeesList: {},
      loggedIn: false,
      showUpdateProfile: false,
      showUpdateEvent: false,
    }
  }
  
  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          loggedIn: true,
        })
      } else {
        this.setState({
          loggedIn: false,
        })
      }
    })
    this.userRef = base.syncState('userProfile',
    {
      context: this,
      state: 'userProfile'
    });  
    this.eventsRef = base.syncState('eventsList',
    {
      context: this,
      state: 'eventsList'
    });
    // this.attendeesRef = base.syncState('attendeesList',
    // {
    //   context: this,
    //   state: 'attendeesList'
    // });    
  }

  componentDidMount() {
    this.userRef = base.syncState('userProfile',
    {
      context: this,
      state: 'userProfile'
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
    base.removeBinding(this.eventsRef);
    base.removeBinding(this.userRef);
    // base.removeBinding(this.attendeesRef);
  }

  logIn(profile) {
    let userProfile = {...this.state.userProfile}
    userProfile = profile
    this.setState({ userProfile, loggedIn: true  })
  }

  logOut() {
    let userProfile = {...this.state.userProfile}
    userProfile = {
      avatar: "",
      bio: "",
      blog: "",
      login: "",
      name: "",
      repo: "",
      uid: ""
    }
    this.setState({ userProfile, loggedIn: false })
    base.removeBinding(this.userRef);
  }

  loadEvents() {
    const eventsList = {...this.state.eventsList, ...sampleEvents.arr};
    this.setState({ eventsList })
  }
  
  // loadAttendees() {
  //   console.log(this.state.attendeesList)
  //   const attendeesList = {...this.state.attendeesList, ...sampleAttendees};
  //   this.setState({ attendeesList })
  // }

  // loadProfile() {
  //   this.setState({ userProfile: sampleProfile });
  // }

  // deleteProfile() {
  //   this.setState({ userProfile: {} });
  // }

  createEvent(key) {
    const eventsList = [...this.state.eventsList];
    console.log("key: ",key);
    console.log("eventsList: ",eventsList);
    
    eventsList.unshift(key);
    console.log("eventsList: ",eventsList);
    this.setState({ eventsList })
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

  addRsvp(id, newAttendee = []) {
    const eventsList = {...this.state.eventsList}
    console.log(eventsList)
    const newRsvp = update(eventsList, {
      [id]: {
        attendees: {
          $push: [newAttendee] 
        }
      }
    })
    console.log(newRsvp)

    this.setState({ eventsList: newRsvp })
  }

  toggleUpdateProfile() {
    this.setState({showUpdateProfile: !this.state.showUpdateProfile})
  }

  toggleUpdateEvent() {
    this.setState({showUpdateEvent: !this.state.showUpdateEvent})
  }
  
  toggleDisplayMain() {
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Header 
              {...this.state} 
              logIn={this.logIn} 
              logOut={this.logOut} 
              // loadProfile={this.loadProfile} 
              // deleteProfile={this.deleteProfile} 
              toggleDisplayMain={this.toggleDisplayMain}
            />
            <Main 
              {...this.state} 
              loadEvents={this.loadEvents} 
              // loadAttendees={this.loadAttendees} 
              // updateProfile={this.updateProfile} 
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
