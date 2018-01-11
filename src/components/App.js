import React, { Component } from 'react'
import update from 'update-immutable'

import '../style/style.css'
import Header from './Header'
import Main from './Main'
import sampleEvents from '../data/sampleEvents'
import sampleAttend from '../data/sampleAttend'
import { app, base } from '../helpers/base'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userProfile: {},
      eventsList: {},
      attendList: {},
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
    this.attendRef = base.syncState('attendList',
    {
      context: this,
      state: 'attendList'
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
    base.removeBinding(this.userRef)
    base.removeBinding(this.eventsRef)
    base.removeBinding(this.attendRef)
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
    this.setState({ eventsList, attendList: sampleAttend })
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
    
    // const myEventsList = [...this.state.eventsList]
    // myEventsList.splice(key, 1)

    this.setState({ eventsList })
    // this.setState({ eventsList, myEventsList })
    this.toggleUpdateEvents()
  }

  addRsvp = (eventId, newAttendee, newAttend) => {
    let eventsList = {...this.state.eventsList}
    eventsList = update(eventsList, {
      [eventId]: {
        attendees: {
          $push: [newAttendee]
        }
      }
    })

    const uid = newAttendee.uid
    const eidFromEventDetails = newAttend.eid
    let attendList = {...this.state.attendList}
    const userAttendList = attendList[uid]

    // Does uid already exists in eventsList?
    if (!attendList.hasOwnProperty(uid) || undefined) {
        // If no uid exists, create object with prop of uid and push newAttend in that object
        attendList = update(attendList, {
          [uid]: {
            $push: [newAttend]
          }
        })
    }
    // If uid exists, check to see if eid already exists in that list
    else if (attendList.hasOwnProperty(uid)) {
      const eidFromAttendList = userAttendList.map( (key, i) => key.eid)
      // Does event already exists?
      if (!eidFromAttendList.includes(eidFromEventDetails)) {
        // If no event exists, push to array. If event exists, do nothing
        attendList = update(attendList, {
          [uid]: {
            $unshift: [newAttend]
          }
        })
      }
    }
    this.setState({ eventsList, attendList })
  }

  removeRsvp = (eventId, rsvpToRemove, eidFromEventDetails) => {
    const eventsList = update({...this.state.eventsList}, {
      [eventId]: {
        attendees: {
          $splice: [ [rsvpToRemove, 1] ]
        }
      }
    })
  
    let attendList = {...this.state.attendList}
    const { uid } = this.state.userProfile
    const userAttendList = attendList[uid]
    let eidFromAttendList

    if (userAttendList !== undefined) {
      eidFromAttendList = userAttendList.map( (key, i) => key.eid)
      // Does event exist in attendList for that user?
      if (eidFromAttendList.includes(eidFromEventDetails)) {
        // If event exists, remove that event
        const index = eidFromAttendList.indexOf(eidFromEventDetails)
        attendList = update({...this.state.attendList}, {
          [uid]: {
            $splice: [ [index, 1] ]
          }
        })
      }
    }

    this.setState({ eventsList, attendList })
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
