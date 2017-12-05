import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import UpdateProfile from './UpdateProfile'

class ShowProfile extends Component {
  render() {
    return (
      <div className="showProfile">
        <h1>Current Profile</h1>

        <div>
          <p>First Name: {this.props.userProfile.firstName || "None"}</p>
          <p>Last Name: {this.props.userProfile.lastName || "None"}</p>
          <p>About Me: {this.props.userProfile.aboutMe || "None"}</p>
          <p>My Interests: {this.props.userProfile.myInterests || "None"}</p>
          <p>Picture URL: <a href={this.props.userProfile.profileUrl} target="_blank">Link</a></p>
        </div>

        <h1>Update Profile</h1>
        <button type="submit" onClick={this.props.toggleUpdateProfile}>Update Profile</button>
        { this.props.showUpdateProfile ? <UpdateProfile updateProfile={this.props.updateProfile} /> : null }
      </div>
    );
  }
}

ShowProfile.propTypes = {
  updateProfile: PropTypes.func,
  toggleDisplayProfile: PropTypes.func
}

export default ShowProfile