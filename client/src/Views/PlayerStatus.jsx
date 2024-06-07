import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav2 from '../Components/Nav2';

function PlayerStatus() {

  const { id } = useParams();
  const [gameId, setGameId] = useState(id);
  const [players, setPlayers] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`)
      .then(res => {
        console.log(res.data.players);
        setPlayers(res.data.players);
      })
      .catch(err => console.log(err));

  }, [gameId]);
  

  const updatePlayerStatus = (playerId, status) => {

    axios.put(`http://localhost:8000/api/players/${playerId}`, { [`statusGame${gameId}`]: status }).then(() => {

      const updatedPlayers = players.map(player => {
        if (player._id === playerId) {
          return { ...player, [`statusGame${gameId}`]: status };
        }
        return player;
      });
      setPlayers(updatedPlayers);
    })


      .catch(error => {
        console.error('Error updating player status:', error);
      })


  };


  useEffect(() => {
    setGameId(id);
  }, [id]);

  return (
    <div className='container'>
      <h1>Player Status - Game {gameId}</h1>

      <Nav2 />

      <table className='player-status-table'>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>
                <button
                  onClick={() => updatePlayerStatus(player._id, 'Playing')}
                  style={{ backgroundColor: player[`statusGame${gameId}`] === 'Playing' ? 'green' : 'white' }}
                >
                  Playing
                </button>
                <button
                  onClick={() => updatePlayerStatus(player._id, 'Not Playing')}
                  style={{ backgroundColor: player[`statusGame${gameId}`] === 'Not Playing' ? 'red' : 'white' }}
                >
                  Not Playing
                </button>
                <button
                  onClick={() => updatePlayerStatus(player._id, 'Undecided')}
                  style={{ backgroundColor: player[`statusGame${gameId}`] === 'Undecided' ? 'yellow' : 'white' }}
                >
                  Undecided
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerStatus;
