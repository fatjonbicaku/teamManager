import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ListPlayers() {

  const [players, setPlayers] =useState([]);

  useEffect(()=>{

    axios.get('http://localhost:8000/api/players')
    .then(res=>{
      setPlayers(res.data.players)
    })
    .catch(err => console.log(err))

  },[])

  const deletePlayer = (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this player?");
    if (confirmDelete) {
       axios.delete(`http://localhost:8000/api/players/${id}`)
       .then(res=>{

        setPlayers(players.filter(player => player._id !== id));
       })
       .catch(err => console.log(err))
    }
  };

 


  return (
    <div>

<table>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Prefered Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => (
          <tr key={player._id}>
            <td>{player.name}</td>
            <td>{player.position ? player.position : "Not Set"}</td>
            <td><button onClick={() => deletePlayer(player._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody> 
    </table>

    </div>
  )
}

export default ListPlayers