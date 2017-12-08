import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
// import CurrentProfile from './CurrentProfile'
import blankPicture from './blank-picture.png'
import firebase from 'firebase'

class Header extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  renderLogin() {
    let github = new firebase.auth.GithubAuthProvider();
    return (
      <nav className="login">
      <button className="github" onClick={() => this.signIn(github)}>Log In With Github</button>
      </nav>
    )
  }

  signIn(provider) {
    const logIn = () => {
      console.log(`Logging into ${provider.providerId}!`);
      firebase.auth().signInWithPopup(provider)
      .then(function(authData) {
        const newUser = { 
          avatar: authData.additionalUserInfo.profile.avatar_url,
          bio: authData.additionalUserInfo.profile.bio,
          blog: authData.additionalUserInfo.profile.blog,
          login: authData.additionalUserInfo.profile.login,
          name: authData.additionalUserInfo.profile.name,
          repo: authData.additionalUserInfo.profile.html_url,
          uid: authData.user.uid
        }
        addUserInfo(newUser);
        console.log(`Successful login with ${provider.providerId}!`);
        console.log(authData);
      }).catch(function(error) {
        console.log(error);
      });
    }

    const addUserInfo = (user) => {
      this.props.updateProfile(user);
    }

    logIn();
  }

  signOut() {
    const logOut = () => {
      this.props.logOut();
    }

    firebase.auth().signOut()
    .then(function() {
      logOut();
      console.log("Logout successful");
    }).catch(function(error) {
      console.log(error);
    });
    
  }

  render() {
    const signOut = <button onClick={this.signOut}>Log out!</button>
    if(!this.props.user) {
      return (
      <div>
        <div className="currentPicture">
          <img src={this.props.userProfile.avatar || blankPicture} alt={this.props.userProfile.avatar || ("")} />
        </div>

        
        <div className="currentInfo">
          {/* <p>{this.props.userProfile.name || "Not logged in"}</p> */}
        </div>

        {this.renderLogin()}
        {signOut}
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

export default Header;



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


