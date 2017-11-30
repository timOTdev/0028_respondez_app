import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShowEvents from './ShowEvents';
import AddProfile from './AddProfile'; 
import AddEvent from './AddEvent';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={ () => <ShowEvents {...this.props} loadEvents={this.props.loadEvents} /> } />
          <Route path='/add-profile' render={ () => <AddProfile updateProfile={this.props.updateProfile} /> } />
          <Route path='/add-event' component={AddEvent} />
        </Switch>
      </main>
    );
  }
}

export default Main;


