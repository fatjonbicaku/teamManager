import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import ManagePlayers from './Components/Views/ManagePlayers';
import PlayerStatus from './Components/Views/PlayerStatus';
import CreatePlayer from './Components/CreatePlayer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/players/list' element={<ManagePlayers />} />
          <Route exact path='/players/addplayer' element={<CreatePlayer />} />
          <Route exact path='/status/game/:id' element={<PlayerStatus />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
