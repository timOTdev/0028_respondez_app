import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import blankPicture from '../data/blank-picture.png'

class MyProfile extends Component {
  render() {
    return (
      <div className="MyProfile">
        <h1 className="header2">My Profile</h1>
        <p className="hr2">O</p>

        <div className="myProfile">
          {(this.props.userProfile.avatar) ? (<img src={this.props.userProfile.avatar} alt={this.props.userProfile.avatar || ("")} />)
            : (<img src={blankPicture} alt={this.props.userProfile.avatar || ("")} />)
          }
          <p>Name: <span className="white">{this.props.userProfile.name || "None"}</span></p>
          <p>Bio: <span className="white">{this.props.userProfile.bio || "None"}</span></p>
          <p>Github: <span className="white">{this.props.userProfile.github || "None"}</span></p>
          <p>Blog: <span className="white">{this.props.userProfile.blog || "None"}</span></p>
          <p>Avatar: <span className="white"><a href={this.props.userProfile.avatar} target="_blank">Link</a></span></p>
          <p>Uid: <span className="white">{this.props.userProfile.uid}</span></p>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  updateProfile: PropTypes.func,
  toggleDisplayProfile: PropTypes.func
}

export default MyProfile