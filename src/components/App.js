import React, { Component } from 'react'
import update from 'update-immutable'

import '../style/style.css'
import Header from './Header'
import Main from './Main'
import sampleEvents from '../data/sampleEvents'
import { app, base } from '../helpers/base'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfile: {},
      eventsList: {},
      loggedIn: false,
      showCreateEvents: false,
      showUpdateEvents: false
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
  }

  logIn = (profile) => {
    let userProfile = {...this.state.userProfile}
    userProfile = profile
    this.setState({ userProfile, loggedIn: true  })
  }

  logOut = () => {
    let userProfile = {...this.state.userProfile}
    userProfile = {
      avatar: "",
      bio: "",
      blog: "",
      login: "",
      name: "",
      github: "",
      uid: ""
    }
    this.setState({ userProfile, loggedIn: false })
    base.removeBinding(this.userRef);
  }

  loadEvents = () => {
    const eventsList = {...this.state.eventsList, ...sampleEvents.arr};
    this.setState({ eventsList })
  }

  createEvent = (key) => {
    const eventsList = [...this.state.eventsList];
    eventsList.unshift(key);
    this.setState({ eventsList })
  }

  updateEvent= (key, updatedEvent) => {
    const events = {...this.state.eventsList};
    events[key] = updatedEvent;
    this.setState({ eventsList: events});
  }

  deleteEvent = (key) => {
    const events = {...this.state.eventsList};
    events[key] = null;
    this.setState({eventsList: events})
  }

  addRsvp = (id, newAttendee) => {
    const eventsList = {...this.state.eventsList}
    const subList = update(eventsList, {
      [id]: {
        attendees: {
          $push: [newAttendee]
        }
      }
    })
    this.setState({ eventsList: subList })
  }

  removeRsvp = (id, rsvpToRemove) => {
    const eventsList = {...this.state.eventsList}
    const subList = update(eventsList, {
      [id]: {
        attendees: {
          $splice: [ [rsvpToRemove, 1] ]
        }
      }
    })
    this.setState({ eventsList: subList })
  }

  addComment = (id, newComment) => {
    const eventsList = {...this.state.eventsList}
    const subList = update(eventsList, {
      [id]: {
        comments: {
          $push: [newComment]
        }
      }
    })
    this.setState({ eventsList: subList })
  }

  removeComment = (eventId, commentId) => {
    const eventsList = {...this.state.eventsList}
    const subList = update(eventsList, {
      [eventId]: {
        comments: {
          $splice: [ [commentId, 1] ]
        }
      }
    })
    this.setState({ eventsList: subList })
  }

  toggleCreateEvents = () => {
    this.setState({showCreateEvents: !this.state.showCreateEvents})
  }

  toggleUpdateEvents = () => {
    this.setState({showUpdateEvents: !this.state.showUpdateEvents})
  }
  
  toggleDisplayMain = () => {
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    return (
        <div>
            <Header 
              {...this.state} 
              logIn={this.logIn} 
              logOut={this.logOut} 
              toggleDisplayMain={this.toggleDisplayMain}
            />
            <Main 
              {...this.state} 
              loadEvents={this.loadEvents} 
              createEvent={this.createEvent} 
              updateEvent={this.updateEvent}
              deleteEvent={this.deleteEvent} 
              addRsvp={this.addRsvp}
              removeRsvp={this.removeRsvp}
              addComment={this.addComment}
              removeComment={this.removeComment}
              toggleCreateEvents={this.toggleCreateEvents}
              toggleUpdateEvents={this.toggleUpdateEvents}
            />
        </div>
    )
  }
}

export default App
