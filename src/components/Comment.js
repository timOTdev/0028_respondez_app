import React, { Component } from 'react'

import '../style/style.css'
import { timeConverter } from '../helpers/helpers.js'

class Comment extends Component {  
  removeComment = (e) => {
    e.preventDefault();
    const { eventId, commentId } = this.props
    this.props.removeComment(eventId, commentId)
  }

  render() { 
    const { name, time, comment, uid } = this.props.comment
    const { uid:userId } = this.props.userProfile
    const humanTime = timeConverter(time);

    return (
      <div className="comment-section" title={humanTime}>
        <span className="comment-name">{name}</span> <span className="white">{comment}</span> {this.props.loggedIn && uid===userId && <span className="commentDeleteButton" role="img" aria-label="Delete Icon" onClick={this.removeComment}>&#9249;</span>}
      </div>
    )
  }
}

export default Comment

