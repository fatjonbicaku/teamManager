const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

// App Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// Conecting to DB
require('./configs/mongoose.config')


// App routes
const appRoutes = require('./routes/player.routes');
appRoutes(app)


//Run server
app.listen(port , ()=> console.log(`Server is running on port: ${port}`))