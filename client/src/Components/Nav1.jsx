import React from 'react'
import { Link } from 'react-router-dom'

function Nav1() {


  return (
    <nav>
     <ul>
      <li><Link to={'/players/list'}>List</Link></li>
      <li><Link to={'/players/addplayer'}>Add Player</Link></li>
     </ul>
    </nav>
  )
}

export default Nav1