import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
// import CurrentProfile from './CurrentProfile'
import blankPicture from './blank-picture.png';
import firebase from 'firebase'

class Header extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
  }

  renderLogin() {
    let github = new firebase.auth.GithubAuthProvider();
    var google = new firebase.auth.GoogleAuthProvider();
    let twitter = new firebase.auth.TwitterAuthProvider();
    return (
      <nav className="login">
      <button className="github" onClick={() => this.authenticate(github)}>Log In With Github</button>
      <button className="google" onClick={() => this.authenticate(google)}>Log In With Google</button>
      <button className="twitter" onClick={() => this.authenticate(twitter)}>Log In With Twitter</button>
      </nav>
    )
  }

  authenticate(provider) {
    // var database = firebase.database();
    console.log(`Trying to log in with ${JSON.stringify(provider.providerId)}!`);
    
    firebase.auth().signInWithPopup(provider)
    .then(function(authData) {
      console.log(authData);
      console.log(`Successful login with ${JSON.stringify(provider.providerId)}!`);
        // let newUser = authData.user.u.src.uid.toString();
        // console.log(newUser);
      }).catch(function(error) {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut()
    .then(function() {
    // Sign-out successful.
    console.log("Logout successful");
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
    this.setState({ user: null });
  }

  render() {
    const logout = <button onClick={this.logout}>Log out!</button>
    if(!this.props.user) {
      return (
      <div>
        <div className="currentPicture">
          <img src={this.props.userProfile.profileUrl || blankPicture} alt={ (this.props.userProfile.firstName || "") + " " + (this.props.userProfile.lastName || "") } />
        </div>

        <div className="currentInfo">
          <p>{this.props.userProfile.firstName || "Not logged in"} {this.props.userProfile.lastName}</p>
        </div>

        {this.renderLogin()}
        {logout}
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


