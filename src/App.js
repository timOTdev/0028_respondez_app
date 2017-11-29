import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Main from './Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Header />
            <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
