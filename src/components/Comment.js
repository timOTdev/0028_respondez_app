import React, { Component } from 'react'

import { timeConverter } from '../helpers/helpers.js'
import '../style/style.css'

class Comment extends Component {  
  removeComment = (e) => {
    e.preventDefault();
    const { eventId, commentId } = this.props
    this.props.removeComment(eventId, commentId)
  }

  render() { 
    const { name, time, comment } = this.props.comment
    const humanTime = timeConverter(time);

    return (
      <div className="comment-section" title={humanTime}>
        <span className="comment-name">{name}</span> <span className="white">{comment}</span> {this.props.loggedIn && <span className="commentDeleteButton" role="img" aria-label="Delete Icon" onClick={this.removeComment}>&#9249;</span>}
      </div>
    )
  }
}

export default Comment

