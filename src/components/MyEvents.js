import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-datetime'

import '../style/style.css'
import '../style/react-datetime.css'
import CreateEvents from './CreateEvents'
import UpdateEvents from './UpdateEvents'

class MyEvents extends Component {
  render() {
    return (
      <div>
        <h1 className="header2">My Events</h1>
        <p className="hr2">O</p>

        <div className="myEvents">
          <CreateEvents {...this.props} toggleCreateEvents={this.props.toggleCreateEvents} />
          <UpdateEvents {...this.props} toggleUpdateEvents={this.props.toggleUpdateEvents} />
        </div>
      </div>
    );
  }
}

MyEvents.propTypes = {
  createEvent: PropTypes.func,
  // eventsList: PropTypes.array,
  toggleUpdateEvent: PropTypes.func,
  showUpdateEvent: PropTypes.bool
}
export default MyEvents
