import React from 'react'

import '../style/App.css'
import MyProfile from './MyProfile'
import Events from './Events'
import MyEvents from './MyEvents'

const Main = props => (
  <div className="main">
    <div className="left">
      {(props.loggedIn) ? (<MyProfile {...props}/>) : null}
      
    </div>
    <div className="center">
      {(props.loggedIn) ? (<Events {...props} />) : null}
    </div>

    <div className="right">
      {(props.loggedIn) ? (<MyEvents {...props} />) : null}
    </div>
  </div>
)

export default Main