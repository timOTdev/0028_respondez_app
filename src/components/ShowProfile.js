import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

// import UpdateProfile from './UpdateProfile'

class ShowProfile extends Component {
  render() {
    return (
      <div className="showProfile">
        <h1 className="header2">My Profile</h1>

        <div>
          <img src={this.props.userProfile.avatar} alt={this.props.userProfile.avatar || ("")} />
          <p>Name: {this.props.userProfile.name || "None"}</p>
          <p>Bio: {this.props.userProfile.bio || "None"}</p>
          <p>Github: {this.props.userProfile.github || "None"}</p>
          <p>Blog: {this.props.userProfile.blog || "None"}</p>
          <p>Avatar: <a href={this.props.userProfile.avatar} target="_blank">Link</a></p>
          <p>Uid: {this.props.userProfile.uid} </p>
        </div>

        {/* <h1>Update Profile</h1>
        <button type="submit" onClick={this.props.toggleUpdateProfile}>Update Profile</button>
        { this.props.showUpdateProfile ? <UpdateProfile updateProfile={this.props.updateProfile} /> : null } */}
      </div>
    );
  }
}

ShowProfile.propTypes = {
  updateProfile: PropTypes.func,
  toggleDisplayProfile: PropTypes.func
}

export default ShowProfile