import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { app, githubProvider } from '../helpers/base'
import '../style/style.css'

class Header extends Component {
  signIn = (provider) => {
    const signIn = () => {
      console.log(`Logging into ${provider.providerId}!`);

      const addUserInfo = (user) => {
        this.props.logIn(user);
      }

      app.auth().signInWithPopup(provider)
        .then(function(authData) {
          const user = { 
            avatar: authData.additionalUserInfo.profile.avatar_url,
            bio: authData.additionalUserInfo.profile.bio,
            blog: authData.additionalUserInfo.profile.blog,
            login: authData.additionalUserInfo.profile.login,
            name: authData.additionalUserInfo.profile.name,
            github: authData.additionalUserInfo.profile.html_url,
            uid: authData.user.uid
          }
          addUserInfo(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    signIn();
  }

  signOut = () => {
    const logOut = () => {
      this.props.logOut();
    }

    app.auth().signOut()
    .then(function() {
      logOut();
      console.log("Logout successful");
    }).catch(function(error) {
      console.log(error);
    });
    
  }
  
  render() {
    const signInButton = <button className="github" onClick={() => this.signIn(githubProvider)}>Log In With Github</button>
    const signOutButton = <button onClick={this.signOut}>Log out!</button>
    if(!this.props.user) {
      return (
        <header>
        <p className="hr1">LOPOL</p>
        <h1 className="header1">Respondez</h1>
        {(!this.props.loggedIn) && signInButton}
        {this.props.loggedIn && signOutButton}
      </header>
      )
    }
  }
}

Header.propTypes = {
  toggleDisplaymain: PropTypes.func
}

export default Header