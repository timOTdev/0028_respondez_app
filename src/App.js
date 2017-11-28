import React, { Component } from 'react'
import './App.css'
import Events from './Events'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The R.S.V.P App</h1>
          <h2>by Timothy Hoang</h2>
        </header>
        <Events />
      </div>
    );
  }
}

export default App
