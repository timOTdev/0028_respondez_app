import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfile: {
        profileUrl: "https://pbs.twimg.com/profile_images/900857250859954178/WGkyHQWs_400x400.jpg",
        firstName: "Timothy",
        lastName: "Hoang",
        aboutMe: "I'm super-duper cool!",
        myInterests: "Web Development",
      }
    }
    this.updateProfile = this.updateProfile.bind(this);
  }

  updateProfile(profile) {
    this.setState({ userProfile: profile })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Header {...this.state}/>
            <Main updateProfile={this.updateProfile} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
