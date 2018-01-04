import React, { Component } from 'react'
import '../style/style.css'

class Comments extends Component {  
  render() { 
    const { name, time, comment } = this.props.comment
    const humanTime = timeConverter(time);
    function timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours() > 12 ? a.getHours() - 12 : a.getHours();
      var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
      var cycle = a.getHours() >= 12 ? "PM" : "AM";
      var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ' ' + cycle;
      return time;
    }

    return (
      <div className="comment-section" title={humanTime}>
        <span className="comment-name">{name}</span> {comment} 
      </div>
    )
  }
}

export default Comments

