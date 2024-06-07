import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {


  return (
    <nav>
     <ul>
      <li><Link to={'/players/list'}>Manage Players</Link></li>
      <li><Link to={'/status/game/1'}>Manage Player Status</Link></li>
     </ul>
    </nav>
  )
}

export default Nav