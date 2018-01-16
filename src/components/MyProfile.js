import React from 'react'

import '../style/MyProfile.css'
import blankPicture from '../data/blank-picture.png'

const MyProfile = (props) => {
    const { avatar, name, bio, github, login, blog } = props.userProfile

    return (
    <div className="MyProfile">
      <h1 className="header2">My Profile</h1>
      <p className="hr2">O</p>

      <div className="myProfile">
        {(avatar) ? (<img src={avatar} alt={avatar || ("")} />)
          : (<img src={blankPicture} alt={avatar || ("")} />)
        }
        <p>Name: <span className="white">{name || login}</span></p>
        { bio ? <p>Bio: <span className="white">{bio}</span></p> : null } 
        { github ? <p>Github: <a href={github}><span className="white">{github}</span></a></p> : null }
        { blog ? <p>Blog: <a href={blog}><span className="white">{blog}</span></a></p> : null }
        { avatar ? <p>Avatar: <span className="white"><a href={avatar} target="_blank">Link</a></span></p> : null }
      </div>
    </div>
  )
}

export default MyProfile