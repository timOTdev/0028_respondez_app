import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import MyProfile from './MyProfile'
import Events from './Events'
import MyEvents from './MyEvents'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left">
          {(this.props.loggedIn) ? (<MyProfile {...this.props}/>) : null}
          
        </div>
        <div className="center">
          <Events {...this.props} 
                        loadEvents={this.props.loadEvents} 
                        loadAttendees={this.props.loadAttendees} 
                        addRsvp={this.props.addRsvp}
                        addComment={this.props.addComment}
                        removeComment={this.props.removeComment}
                        />
        </div>
        <div className="right">
          {(this.props.loggedIn) ? (<MyEvents {...this.props} 
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


