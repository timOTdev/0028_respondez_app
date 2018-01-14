import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import { auth, githubProvider } from '../helpers/base'

class Header extends Component {
  signIn = () => {
    console.log("Logging into Github!")

    auth.signInWithPopup(githubProvider)
      .then( (authData) => {
        const { avatar_url, bio, blog, name, login, html_url } = authData.additionalUserInfo.profile
        const profile = { 
          avatar: avatar_url,
          bio: bio,
          blog: blog,
          name: name || login,
          github: html_url,
          uid: authData.user.uid
        }

        this.props.logIn(profile)
      })
      .catch( (err) => console.log("Error: " + err))
  }

  signOut = () => {
      auth.signOut()

      const profile = { 
        avatar: "",
        bio: "",
        blog: "",
        name: "",
        github: "",
        uid: ""
      }

      this.props.logOut(profile)
  }
  
  render() {
    const { loggedIn } = this.props
    const signInButton = <a onClick={this.signIn}><span role="img" aria-label="closed lock with key icon">&#128272;</span></a>
    const signOutButton = <a onClick={this.signOut}><span role="img" aria-label="open lock icon">&#128275;</span></a>
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