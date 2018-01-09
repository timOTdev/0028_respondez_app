import React, { Component } from 'react'
import update from 'update-immutable'

import '../style/style.css'
import Header from './Header'
import Main from './Main'
import sampleEvents from '../data/sampleEvents'
import { app, base } from '../helpers/base'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userProfile: {},
      eventsList: {},
      myEventsList: {},
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
    })  
    this.eventsRef = base.syncState('eventsList',
    {
      context: this,
      state: 'eventsList'
    })
    this.myEventsRef = base.syncState('myEventsList',
    {
      context: this,
      state: 'myEventsList'
    })
  }

  componentDidMount() {
    this.userRef = base.syncState('userProfile',
    {
      context: this,
      state: 'userProfile'
    })
  }

  componentWillUnmount() {
    this.removeAuthListener()
    base.removeBinding(this.eventsRef)
    base.removeBinding(this.userRef)
    base.removeBinding(this.myEventsRef)
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
    base.removeBinding(this.userRef)
  }

  loadEvents = () => {
    const eventsList = {...this.state.eventsList, ...sampleEvents.arr}
    this.setState({ eventsList })
  }

  createEvent = (key) => {
    const eventsList = [...this.state.eventsList]
    eventsList.unshift(key)
    this.setState({ eventsList })
    this.toggleCreateEvents()
  }

  updateEvent = (key, updatedEvent) => {
    const eventsList = {...this.state.eventsList}
    eventsList[key] = updatedEvent
    this.setState({ eventsList })
  }

  deleteEvent = (key) => {
    const eventsList = [...this.state.eventsList]
    eventsList.splice(key, 1)
    
    const myEventsList = [...this.state.eventsList]
    myEventsList.splice(key, 1)

    this.setState({ eventsList, myEventsList })
    this.toggleUpdateEvents()
  }

  addRsvp = (eventId, newAttendee) => {
    let eventsList = {...this.state.eventsList}
    eventsList = update(eventsList, {
      [eventId]: {
        attendees: {
          $push: [newAttendee]
        }
      }
    })

    const myEventsList = [...this.state.myEventsList]
    const { eventName, date, time, location, eid } = eventsList[eventId]
    const myNewEvent = {
      eventName,
      date,
      time,
      location,
      eid
    }
    myEventsList.unshift(myNewEvent)
    
    this.setState({ eventsList, myEventsList })
  }

  removeRsvp = (eventId, rsvpToRemove, eid) => {
    const eventsList = update({...this.state.eventsList}, {
      [eventId]: {
        attendees: {
          $splice: [ [rsvpToRemove, 1] ]
        }
      }
    })

    let myEventsList = [...this.state.myEventsList]
    for (let event in myEventsList) {
      if (eid === myEventsList[event].eid) {
        myEventsList.splice(event, 1)
      }
    }

    this.setState({ eventsList, myEventsList })
  }

  addComment = (id, newComment) => {
    let eventsList = {...this.state.eventsList}
    eventsList = update(eventsList, {
      [id]: {
        comments: {
          $push: [newComment]
        }
      }
    })
    this.setState({ eventsList })
  }

  removeComment = (eventId, commentId) => {
    let eventsList = {...this.state.eventsList}
    eventsList = update(eventsList, {
      [eventId]: {
        comments: {
          $splice: [ [commentId, 1] ]
        }
      }
    })
    this.setState({ eventsList })
  }

  toggleCreateEvents = () => {
    this.setState({ showCreateEvents: !this.state.showCreateEvents, showUpdateEvents: false })
  }

  toggleUpdateEvents = () => {
    this.setState({ showUpdateEvents: !this.state.showUpdateEvents, showCreateEvents: false })
  }
  
  toggleDisplayMain = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
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
