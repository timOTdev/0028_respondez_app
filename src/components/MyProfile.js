import React from 'react'

import '../style/style.css'
import blankPicture from '../data/blank-picture.png'

const MyProfile = props => {
    const { avatar, name, bio, github, blog, uid } = props.userProfile

    return (
    <div className="MyProfile">
      <h1 className="header2">My Profile</h1>
      <p className="hr2">O</p>

      <div className="myProfile">
        {(avatar) ? (<img src={avatar} alt={avatar || ("")} />)
          : (<img src={blankPicture} alt={avatar || ("")} />)
        }
        <p>Name: <span className="white">{name || "None"}</span></p>
        <p>Bio: <span className="white">{bio || "None"}</span></p>
        <p>Github: <a href={github}><span className="white">{github || "None"}</span></a></p>
        <p>Blog: <a href={blog}><span className="white">{blog || "None"}</span></a></p>
        <p>Avatar: <span className="white"><a href={avatar} target="_blank">Link</a></span></p>
        <p>Uid: <span className="white">{uid}</span></p>
      </div>
    </div>
  )
}

export default MyProfile