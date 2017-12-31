import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import ShowEvents from './ShowEvents'
import ShowProfile from './ShowProfile'
import AddEvent from './AddEvent'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left">
          {(this.props.loggedIn) ? (<ShowProfile {...this.props} 
                                      updateProfile={this.props.updateProfile} 
                                      toggleUpdateProfile={this.props.toggleUpdateProfile}
                                    />) 
                      : null}
          
        </div>
        <div className="center">
          <ShowEvents {...this.props} 
                        loadEvents={this.props.loadEvents} 
                        loadAttendees={this.props.loadAttendees} 
                        addRsvp={this.props.addRsvp}
                        />
        </div>
        <div className="right">
          {(this.props.loggedIn) ? (<AddEvent {...this.props} 
                                  createEvent={this.props.createEvent} 
                                  updateEvent={this.props.updateEvent} 
                                  deleteEvent={this.props.deleteEvent} 
                                  toggleUpdateEvent={this.props.toggleUpdateEvent}
                        />) 
                      : null}
          
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  loadEvents: PropTypes.func,
  loadAttendees: PropTypes.func,
  updateProfile: PropTypes.func,
  createEvent: PropTypes.func,
  updateEvent: PropTypes.func,
  deleteEvent: PropTypes.func,
  toggleDisplayProfile: PropTypes.func,
  toggleDisplayEvent: PropTypes.func,
  showMain: PropTypes.bool,
}
export default Main


