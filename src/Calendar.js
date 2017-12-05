import React, { Component } from 'react'
import './App.css'

class Calendar extends Component() {
  render() {
    return (
      <input type="text" ref={(input) => {this.date = input}} placeholder="Date" required />
    )
  }
}

export default Calendar