import React, { Component } from 'react';
import './App.css';
import ShowEvents from './ShowEvents';
import ShowProfile from './ShowProfile'; 
import AddEvent from './AddEvent';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left">
          {(this.props.showMain) ? (<ShowProfile {...this.props} 
                                      updateProfile={this.props.updateProfile} 
                                      displayUpdateProfile={this.props.displayUpdateProfile}
                                    />) 
                      : null}
          
        </div>
        <div className="center">
          {(this.props.showMain) ? (<ShowEvents {...this.props} 
                                     loadEvents={this.props.loadEvents} 
                                    //  removeEvents={this.props.removeEvents} 
                                     removeEvent={this.props.removeEvent} 
                        />)
                      : null}
        </div>
        <div className="right">
          {(this.props.showMain) ? (<AddEvent {...this.props} 
                                  addEvent={this.props.addEvent} 
                                  updateEvent={this.props.updateEvent} 
                                  displayUpdateEvent={this.props.displayUpdateEvent}
                        />) 
                      : null}
          
        </div>
      </div>
    );
  }
}

export default Main;


