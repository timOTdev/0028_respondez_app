import React from 'react'

import '../style/style.css'
import MyProfile from './MyProfile'
import Events from './Events'
import MyEvents from './MyEvents'

const Main = props => (
  <div className="main">
    <div className="left">
      {(props.loggedIn) ? (<MyProfile {...props}/>) : null}
      
    </div>
    <div className="center">
      <Events {...props} />
    </div>

    <div className="right">
      {(props.loggedIn) ? (<MyEvents {...props} />) : null}
      
    </div>

    <footer>
      <div className="bottomnav" id="myBottomNav">
        © 2018 <a href="http://timothyhoang.net/">Timothy Hoang</a> 
      </div>
    </footer>
  </div>
)

export default Main


