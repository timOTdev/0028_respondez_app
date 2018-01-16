import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/MyEvents.css'
import '../style/react-datetime.css'
import CreateEvents from './CreateEvents'
import MyEvent from './MyEvent'
import UpdateEvents from './UpdateEvents'
import { isEmpty } from '../helpers/helpers'

class MyEvents extends Component {
  render() {
    const { attendList } = this.props
    const { uid } = this.props.userProfile

    return (
      <div>
        <h1 className="header2">My Events</h1>
        <p className="hr2">O</p>

        {(!isEmpty(attendList) && attendList[uid] !== undefined) ? attendList[uid].slice(0, 3).map( (details, key) => <MyEvent key={key} details={details} />) : ""}

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