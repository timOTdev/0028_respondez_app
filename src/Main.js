import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShowEvents from './ShowEvents';
import AddEvent from './AddEvent';
import AddRsvp from './AddRsvp'; 

class Main extends Component {
    render() {
      return (
        <main>
          <Switch>
              <Route exact path='/' component={ShowEvents} />
              <Route path='/add-event' component={AddEvent} />
              <Route path='/add-rsvp' component={AddRsvp} />
          </Switch>
        </main>
      );
    }
  }

export default Main;


