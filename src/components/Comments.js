import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import Comment from './Comment'

class Comments extends Component {
  addComment = (e) => {
    e.preventDefault();
    const { eventId } = this.props
    const { uid, name } = this.props.userProfile;
    const time = Math.floor(Date.now() / 1000);
    const comment = this.refs.userComment.value;
    const newComment = {
      uid,
      time,
      name,
      comment
    }
    this.props.addComment(eventId, newComment)
    this.refs.commentForm.reset()
  }

  render() {
    const { eventId } = this.props
    const comments = this.props.eventsList[eventId].comments
    
    return (
      <div>
        <div className="comments-section">
          <h3 className="header3">Comments</h3>
          {(comments) ? comments.map( (comment, i) => <Comment key={i} commentId={i} comment={comment} {...this.props} />)
            : <p><span className="white" role="img" aria-label="Comment Icon">&#128172; 0</span></p>
          }
          
          {this.props.loggedIn && <form className="comment-form" ref="commentForm" onSubmit={this.addComment}>
            <span className="comment-name">{this.props.details.creator}</span> 
            <input className="comment-box" type="text" placeholder="writes..." ref="userComment" />
          </form>}
        </div>
        <p className="hr3">OPO</p>
      </div>
    )
  }
}

export default Comments