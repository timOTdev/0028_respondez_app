import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import ShowEvents from './ShowEvents'
import ShowProfile from './ShowProfile'
import AddEvent from './AddEvent'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left">
          {(this.props.showMain) ? (<ShowProfile {...this.props} 
                                      updateProfile={this.props.updateProfile} 
                                      toggleUpdateProfile={this.props.toggleUpdateProfile}
                                    />) 
                      : null}
          
        </div>
        <div className="center">
          {(this.props.showMain) ? (<ShowEvents {...this.props} 
                                     loadEvents={this.props.loadEvents} 
                                    //  deleteEvents={this.props.deleteEvents} 
                                     deleteEvent={this.props.deleteEvent} 
                        />)
                      : null}
        </div>
        <div className="right">
          {(this.props.showMain) ? (<AddEvent {...this.props} 
                                  createEvent={this.props.createEvent} 
                                  updateEvent={this.props.updateEvent} 
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
  // deleteEvents: PropTypes.func,
  updateProfile: PropTypes.func,
  createEvent: PropTypes.func,
  updateEvent: PropTypes.func,
  deleteEvent: PropTypes.func,
  toggleDisplayProfile: PropTypes.func,
  toggleDisplayEvent: PropTypes.func,
  showMain: PropTypes.bool,
}
export default Main


