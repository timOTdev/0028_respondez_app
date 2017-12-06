import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import CurrentProfile from './CurrentProfile'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <CurrentProfile {...this.props} toggleDisplayMain={this.props.toggleDisplayMain}/>

          <hr id="divider" />
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  toggleDisplaymain: PropTypes.func
}
  
export default Header


