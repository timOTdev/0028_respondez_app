import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

import blankPicture from '../data/blank-picture.png'

class ShowProfile extends Component {
  render() {
    return (
      <div className="showProfile">
        <h1 className="header2">My Profile</h1>

        <div>
          {(this.props.userProfile.avatar) ? (<img src={this.props.userProfile.avatar} alt={this.props.userProfile.avatar || ("")} />)
            : (<img src={blankPicture} alt={this.props.userProfile.avatar || ("")} />)
          }
          <p>Name: {this.props.userProfile.name || "None"}</p>
          <p>Bio: {this.props.userProfile.bio || "None"}</p>
          <p>Github: {this.props.userProfile.github || "None"}</p>
          <p>Blog: {this.props.userProfile.blog || "None"}</p>
          <p>Avatar: <a href={this.props.userProfile.avatar} target="_blank">Link</a></p>
          <p>Uid: {this.props.userProfile.uid} </p>
        </div>
      </div>
    );
  }
}

ShowProfile.propTypes = {
  updateProfile: PropTypes.func,
  toggleDisplayProfile: PropTypes.func
}

export default ShowProfile