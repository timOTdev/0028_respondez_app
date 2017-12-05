import React, { Component } from 'react'
import './App.css'
import blankPicture from './blank-picture.png'
import PropTypes from 'prop-types'
// import { Link, Switch, Route } from 'react-router-dom'

class CurrentProfile extends Component {
  constructor() {
    super();
    this.showMain = this.showMain.bind(this);
    this.hideMain = this.hideMain.bind(this);
  }
  showMain() {
    this.props.toggleDisplayMain();
    this.props.loadProfile();
  }
  
  hideMain() {
    this.props.toggleDisplayMain();
    this.props.removeProfile();
  }
  render() {
    return (
      <div>
        <div className="currentProfile">
          <div className="currentPicture">
            <img src={this.props.userProfile.profileUrl || blankPicture} alt={ (this.props.userProfile.firstName || "") + " " + (this.props.userProfile.lastName || "") } />
          </div>

          <div className="currentInfo">
            <p>{this.props.userProfile.firstName || "Not logged in"} {this.props.userProfile.lastName}</p>
          </div>
        </div>
        
        <input placeholder="firstName"></input>
        <input placeholder="lastName"></input>
        <input placeholder="password"></input>
        <div>
        <button type="submit" onClick={(input) => this.showMain(input)}>Login</button>
        <button type="submit" onClick={(input) => this.hideMain(input)}>Logout</button>
        </div>
      </div>
    );
  }
}

CurrentProfile.propTypes = {
  toggleDisplaymain: PropTypes.func,
  loadProfile: PropTypes.func,
  removeProfile: PropTypes.func,
}

export default CurrentProfile

// {/* <Link to='/main'>Log In</Link> */}
// <Switch>
//   <Route path='/main' component={Main} />
// </Switch>