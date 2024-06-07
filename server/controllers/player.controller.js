const Player = require('../models/player.model');


module.exports.createPlayer = (req, res) => {
  Player.create(req.body)
    .then(player => {
      res.status(200).json({ message: "Player is created succesfully.", player: player })
    })
    .catch(err => {
      res.status(400).json({ message: err.errors })
    })
}

module.exports.findAllPlayers = (req, res) => {
  Player.find().sort({ createdAt: -1 })
    .then(players => {
      res.status(200).json({ players: players })
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

module.exports.findOnePlayer = (req, res) => {
  Player.findOne({ _id: req.params.id })
    .then(player => {
      if (!player) {
        return res.status(200).json({ message: "Cant find player requested or it does not exist" })
      }
      res.status(200).json(player)
    })
    .catch(err => {
      res.status(400).json({ message: "Cant find player requested or it does not exist" })
    })
}

module.exports.editOnePlayer = (req, res) => {
  Player.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(player => {
      res.status(200).json({ message: "Player is updated sucessfully.", player })
    })
    .catch(err => {
      if (err.name == "CastError") {
        return res.status(400).json({ message: 'Player requested does not exist.' })
      }
      res.status(400).json({ message: err.errors })

    }

    )
}

module.exports.deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Player deleted succesfully." })
    })
    .catch(err => {
      if (err.name == "CastError") {
        res.status(400).json({ message: 'Player requested does not exist.' })
      }
    })
}