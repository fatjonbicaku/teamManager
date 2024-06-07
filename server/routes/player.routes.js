const PlayerController = require('../controllers/player.controller');


module.exports = (app) => {
 
    app.post('/api/players', PlayerController.createPlayer);
    app.get('/api/players' , PlayerController.findAllPlayers);
    app.get('/api/players/:id' , PlayerController.findOnePlayer);
    app.put('/api/players/:id' , PlayerController.editOnePlayer);
    app.delete('/api/players/:id' , PlayerController.deletePlayer);
  
}