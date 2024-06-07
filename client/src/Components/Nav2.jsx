import React from 'react'
import { Link } from 'react-router-dom'

function Nav2() {
  return (
    <nav>
     <ul>
      <li><Link to={'/status/game/1'}>Game1</Link></li>
      <li><Link to={'/status/game/2'}>Game2</Link></li>
      <li><Link to={'/status/game/3'}>Game3</Link></li>
     </ul>
    </nav>
  )
}

export default Nav2