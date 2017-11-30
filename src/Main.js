import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShowEvents from './ShowEvents';
import ShowProfile from './ShowProfile'; 
import AddEvent from './AddEvent';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left">
          <ShowProfile {...this.props} updateProfile={this.props.updateProfile} />
        </div>
        <div className="center">
          <ShowEvents {...this.props} loadEvents={this.props.loadEvents} />
        </div>
        <div className="right">
          <AddEvent {...this.props}/>
        </div>
      </div>

      // <main>
      //   <Switch>
      //     <Route exact path='/' render={ () => <ShowEvents {...this.props} loadEvents={this.props.loadEvents} /> } />
      //     <Route path='/add-profile' render={ () => <AddProfile {...this.props} updateProfile={this.props.updateProfile} /> } />
      //     <Route path='/add-event' component={AddEvent} />
      //   </Switch>
      // </main>
    );
  }
}

export default Main;


