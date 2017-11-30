import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Main from './Main';
import sampleEvents from './sampleEvents'

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
      },
      eventsList: {}
    }
    this.updateProfile = this.updateProfile.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
  }
  
  updateProfile(profile) {
    this.setState({ userProfile: profile })
  }
  
  loadEvents() {
    this.setState({ eventsList: sampleEvents })
  }

  render() {
    return (
        <div>
            <Header {...this.state}/>
            <Main {...this.state} updateProfile={this.updateProfile} loadEvents={this.loadEvents} />
        </div>
    )
  }
}

export default App;
