const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teamManager')
  .then(res => console.log("Connected to DB"))
  .catch(err => console.log(err))