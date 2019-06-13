const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// models
const Bear = require('../db/models/bear');

// gives express middleware to decode urls
app.use(bodyParser.urlencoded({ extended: true }));
// gives express middleware to decode json
app.use(bodyParser.json());

// set port to either Environment's default or 8080
const port = process.env.PORT || 8080;

// get instance of Express router
var router = express.Router();

// middleware for all requests, allows us to perform validations and throw errors
router.use((req, res, next) => {
  console.log('something is happening');
  next(); // move onto next route
});

// sample db
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

// initial message to test functionality
// will be altered later.
router.get('/', (req, res) => {
  res.json({ message: 'hooray!, welcome to the API!' })
});

// define route prefix: /api
app.use('/api', router);

// start server
app.listen(port);

console.log('Server operating on port ', port);
