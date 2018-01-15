import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import Comment from './Comment'

class Comments extends Component {
  addComment = (e) => {
    e.preventDefault();
    const { eventId } = this.props
    const { uid, name, login } = this.props.userProfile;
    const time = Math.floor(Date.now() / 1000);
    const comment = this.refs.userComment.value;
    const newComment = {
      uid,
      time,
      name,
      login,
      comment
    }
    this.props.addComment(eventId, newComment)
    this.refs.commentForm.reset()
  }

  render() {
    const { eventId, loggedIn } = this.props
    const { name, login } = this.props.userProfile
    const comments = this.props.eventsList[eventId].comments
    const commentIcon = <span className="white" role="img" aria-label="speech balloon icon">&#128172; 0</span>

    return (
      <div>
        <div className="comments-section">
          <h3 className="header3">Comments</h3>
          {(comments) ? comments.map( (comment, i) => <Comment key={i} commentId={i} comment={comment} {...this.props} />)
            : <p>{commentIcon}</p>
          }
          
          {loggedIn && <form className="comment-form" ref="commentForm" onSubmit={this.addComment}>
            <span className="comment-name">{name || login}</span> 
            <input className="comment-box" type="text" placeholder="writes..." ref="userComment" />
          </form>}
        </div>

        <p className="hr3">OPO</p>
      </div>
    )
  }
}

Comments.propTypes = {
  addComment: PropTypes.func,
}

export default Comments