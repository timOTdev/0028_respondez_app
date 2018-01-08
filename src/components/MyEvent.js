import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'

class MyEvent extends Component {
  render() {
    const { eventName, date, time, location } = this.props.details

    return (
      <div title={location}>
        <h3 className="underline gold">{eventName}</h3>
        <p className="white">{date} @ {time}</p>
        <hr />
      </div>
    )
  }
}

export default MyEvent 