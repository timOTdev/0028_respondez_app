import React, { Component } from 'react'
import update from 'update-immutable'
import { RingLoader } from 'react-spinners'

import '../style/App.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { auth, base } from '../helpers/base'
import sampleEvents from '../data/sampleEvents'
import sampleAttend from '../data/sampleAttend'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userProfile: {},
      eventsList: {},
      attendList: {},
      loggedIn: false,
      loading: false,
      showCreateEvents: false,
      showUpdateEvents: false
    }
  }
  
  componentWillMount() {
    this.spinnerHandler()
  }

  componentDidMount() {
    this.removeAuthListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.spinnerHandler()
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

        this.setState({ loggedIn: true, loading: false })
      } else {
        this.setState({ loggedIn: false, loading: false })
      }
    })
  }
  
  componentWillUnmount() {
    this.removeAuthListener()
    base.removeBinding(this.userRef)
    base.removeBinding(this.eventsRef)
    base.removeBinding(this.attendList)
  }

  spinnerHandler = () => {
    this.setState({ loading: true })
  }

  logIn = (profile) => {
    let userProfile = {...this.state.userProfile}
    userProfile = profile
    this.setState({ userProfile, loggedIn: true, loading: false })
  }

  logOut = (profile) => {
      let userProfile = {...this.state.userProfile}
      userProfile = profile
      this.setState({ userProfile, loggedIn: false })
  }

  // Remove in production
  loadEvents = () => { 
    const eventsList = {...this.state.eventsList, ...sampleEvents.arr}
    const attendList = {...this.state.attendList, ...sampleAttend}
    this.setState({ eventsList, attendList })
  }

  // Remove in production
  unloadEvents = () => {
    let eventsList = {...this.state.eventsList}
    let attendList = {...this.state.attendList}
    eventsList = null
    attendList = null
    this.setState({ eventsList, attendList })
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

  deleteEvent = (key, eidFromEventDetails) => {
    const eventsList = [...this.state.eventsList]
    eventsList.splice(key, 1)
    
    let attendList
    const { uid } = this.state.userProfile
    attendList = update({...this.state.attendList}, {
      [uid]: {
        $splice: [[ eidFromEventDetails, 1 ]]
      }
    })

    this.setState({ eventsList, attendList })
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
      // Does event already exists?  If event exists, do nothing
      if (!eidFromAttendList.includes(eidFromEventDetails)) {
        // If no event exists, push to array.
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
          $splice: [[ rsvpToRemove, 1 ]]
        }
      }
    })
  
    let eidFromAttendList
    let attendList = {...this.state.attendList}
    const { uid } = this.state.userProfile
    const userAttendList = attendList[uid]

    if (userAttendList !== undefined) {
      eidFromAttendList = userAttendList.map( (key, i) => key.eid)
      // Does event exist in attendList for that user?
      if (eidFromAttendList.includes(eidFromEventDetails)) {
        // If event exists, remove that event
        const index = eidFromAttendList.indexOf(eidFromEventDetails)
        attendList = update({...this.state.attendList}, {
          [uid]: {
            $splice: [[ index, 1 ]]
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
          $splice: [[ commentId, 1 ]]
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
    const { loading } = this.state
    return (
      <div id="container">
        <Header 
          {...this.state} 
          spinnerHandler={this.spinnerHandler} 
          logIn={this.logIn} 
          logOut={this.logOut} 
          loadEvents={this.loadEvents} // Remove in production
          unloadEvents={this.unloadEvents} // Remove in production
          toggleDisplayMain={this.toggleDisplayMain}
        />

        { loading ? (
                    <div id="RingLoader">
                      <RingLoader
                        loading={this.state.loading} 
                        color={'gold'}
                        size={100}
                      />
                    </div>)
                  : <Main 
                      {...this.state} 
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
        }

        <Footer />
      </div>
    )
  }
}

export default App