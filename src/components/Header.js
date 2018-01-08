import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import { app, githubProvider } from '../helpers/base'

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
    const signInButton = <a onClick={() => this.signIn(githubProvider)}><span role="img" aria-label="Lock Icon">&#128272;</span></a>
    const signOutButton = <a onClick={this.signOut}><span role="img" aria-label="Unlock Icon">&#128275;</span></a>
    if(!this.props.user) {
      return (
      <header>
        <nav>
          <div className="topnav" id="myTopnav">
            {(!this.props.loggedIn) && signInButton}
            {this.props.loggedIn && signOutButton}
          </div>
        </nav>
        <p className="hr1">LOPOL</p>
        <h1 className="header1">Respondez </h1>
        <h3 className="header3"><span role="img" aria-label="Calendar Icon">&#128198;</span> An Event Management System</h3>
        
        <p className="hr1">LOPOL</p>
      </header>
      )
    }
  }
}

Header.propTypes = {
  toggleDisplaymain: PropTypes.func
}

export default Header