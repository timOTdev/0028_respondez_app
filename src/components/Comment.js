import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/Events.css'
import { timeConverter } from '../helpers/helpers.js'

class Comment extends Component {  
  removeComment = (e) => {
    e.preventDefault()
    const { eventId, commentId } = this.props
    this.props.removeComment(eventId, commentId)
  }

  render() { 
    const { name, login, time, comment, uid } = this.props.comment
    const { uid:userId  } = this.props.userProfile
    const humanTime = timeConverter(time)
    const deleteIcon = <span className="commentDeleteButton" role="img" aria-label="symbol for delete icon" onClick={this.removeComment}>&#9249;</span>
    
    return (
      <div className="comment-section" title={humanTime}>
        <span className="comment-name">{name || login}</span> <span className="white">{comment}</span> { this.props.loggedIn && uid === userId && deleteIcon }
      </div>
    )
  }
}

// Remove in production
Comment.propTypes = {
  removeComment: PropTypes.func,
}

export default Comment