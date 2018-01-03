import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import firebase from 'firebase'
import { app, githubProvider } from '../helpers/base'
import '../style/style.css'

// import CurrentProfile from './CurrentProfile'
import blankPicture from '../data/blank-picture.png'

class Header extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn(provider) {
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

  signOut() {
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

  renderLogin() { 
    return (
      <nav className="login">
      <button className="github" onClick={() => this.signIn(githubProvider)}>Log In With Github</button>
      </nav>
    )
  }

  render() {
    const signOut = <button onClick={this.signOut}>Log out!</button>
    if(!this.props.user) {
      return (
      <div>
        <div className="currentPicture">
          <h1 className="header1">Respondez</h1>
          {/* <img src={this.props.userProfile.avatar || blankPicture} alt={this.props.userProfile.avatar || ("")} /> */}
        </div>
        
        <div className="currentInfo">
          {/* <p>{this.props.userProfile.name || "Not logged in"}</p> */}
        </div>

        {(!this.props.loggedIn) && this.renderLogin()}
        {this.props.loggedIn && signOut}
        <hr id="divider" />
      </div>
      )
    }
    
    // if(this.state.uid !== this.state.owner) {
    //   return (
    //     <div>
    //       <p>Sorry, you are not authorized!</p>
    //       {logout}
    //     </div>
    //   )
    // }

    // return (
    //   <div>
    //     <header>
    //       <CurrentProfile {...this.props} toggleDisplayMain={this.props.toggleDisplayMain}/>

    //       <hr id="divider" />
    //     </header>
    //   </div>
    // )
  }
}

Header.propTypes = {
  toggleDisplaymain: PropTypes.func
}

export default Header



// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import './App.css'
// import CurrentProfile from './CurrentProfile'

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <header>
//           <CurrentProfile {...this.props} toggleDisplayMain={this.props.toggleDisplayMain}/>

//           <hr id="divider" />
//         </header>
//       </div>
//     )
//   }
// }

// Header.propTypes = {
//   toggleDisplaymain: PropTypes.func
// }
  
// export default Header


