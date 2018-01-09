import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import '../style/react-datetime.css'
import CreateEvents from './CreateEvents'
import MyEvent from './MyEvent'
import UpdateEvents from './UpdateEvents'

class MyEvents extends Component {
  render() {
    const {myEventsList} = this.props
    
    return (
      <div>
        <h1 className="header2">My Events</h1>
        <p className="hr2">O</p>

        {Object.values(myEventsList).slice(0, 3).map( (details, key) => <MyEvent key={key} details={details} {...this.props} />)}
      
        <div className="myEvents">
          <CreateEvents {...this.props} /> 
          <UpdateEvents {...this.props} />
        </div>
      </div>
    )
  }
}

MyEvents.propTypes = {
  MyEvent: PropTypes.func,
}

export default MyEvents
