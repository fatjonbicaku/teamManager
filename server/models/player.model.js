const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
     
  name: {
    type: String,
    required: [true, 'Player name is required.'],
    minlength: [3, "Player name must be 3 character long."]
  },
  position:{
    type: String
  },
  statusGame1:{
    type: String,
    default: "Undecided",
  },
  statusGame2:{
    type: String,
    default: "Undecided",
  },
  statusGame3:{
    type: String,
    default: "Undecided",
  }
}, {timestamps: true})


module.exports = mongoose.model('Player', PlayerSchema);