import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import { app, auth, githubProvider } from '../helpers/base'

class Header extends Component {
  signIn = () => {
    console.log("Logging into Github!")

    auth.signInWithPopup(githubProvider)
      .then( (authData) => {
        const profile = { 
          avatar: authData.additionalUserInfo.profile.avatar_url,
          bio: authData.additionalUserInfo.profile.bio,
          blog: authData.additionalUserInfo.profile.blog,
          login: authData.additionalUserInfo.profile.login,
          name: authData.additionalUserInfo.profile.name,
          github: authData.additionalUserInfo.profile.html_url,
          uid: authData.user.uid
        }

        this.props.logIn(profile)
      })
      .catch( (err) => console.log("Error: " + err))
  }

  signOut = () => {
      auth.signOut()
      this.props.logOut()
  }
  
  render() {
    const { loggedIn } = this.props
    const signInButton = <button type="button" onClick={this.signIn}><span role="img" aria-label="closed lock with key icon">&#128272;</span></button>
    const signOutButton = <button type="button" onClick={this.signOut}><span role="img" aria-label="open lock icon">&#128275;</span></button>
    const calendarIcon = <span role="img" aria-label="tear-off calendar icon">&#128198;</span>

    if(!this.props.user) {
      return (
      <header>
        <nav>
          <div className="topnav" id="myTopnav">
            {(!loggedIn) && signInButton}
            {loggedIn && signOutButton}
          </div>
        </nav>
        <p className="hr1">LOPOL</p>
        <h1 className="header1">Respondez </h1>
        <h3 className="header3">{calendarIcon} An Event Management System</h3>
        
        <p className="hr1">LOPOL</p>
      </header>
      )
    }
  }
}

Header.propTypes = {
  signIn: PropTypes.func,
  signOut: PropTypes.func,
}

export default Header