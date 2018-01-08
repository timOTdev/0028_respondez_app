import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-datetime'

import '../style/style.css'
import '../style/react-datetime.css'
import CreateEvents from './CreateEvents'
import UpdateEvents from './UpdateEvents'
import MyEvent from './MyEvent'

class MyEvents extends Component {
  render() {
    const {myEventsList} = this.props
    return (
      <div>
        <h1 className="header2">My Events</h1>
        <p className="hr2">O</p>

        {Object.values(myEventsList).map( (details, key) => <MyEvent key={key} details={details} {...this.props} />)}
      
        <div className="myEvents">
          <CreateEvents {...this.props} />
          <UpdateEvents {...this.props} />
        </div>
      </div>
    );
  }
}

// MyEvents.propTypes = {
//   createEvent: PropTypes.func,
//   eventsList: PropTypes.array,
//   toggleUpdateEvent: PropTypes.func,
//   showUpdateEvent: PropTypes.bool
// }

export default MyEvents
