import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShowEvents from './ShowEvents';
import AddEvent from './AddEvent';
import AddProfile from './AddProfile'; 

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path='/' render={ () => <ShowEvents loadEvents={this.props.loadEvents} /> } />
            <Route path='/add-profile' render={ () => <AddProfile updateProfile={this.props.updateProfile} /> } />
            <Route path='/add-event' component={AddEvent} />
        </Switch>
      </main>
    );
  }
}

export default Main;


