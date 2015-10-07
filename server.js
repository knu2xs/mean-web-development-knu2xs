/* globals require, module*/

// set the node environment to development if parameter is not provided
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// import config modules
var mongoose = require('./config/mongoose'),
  express = require('./config/express');

// create connection to database
var db = mongoose();

// create our custom application instance
var app = express();

// listen on port 3000
app.listen(3000);

// return the application
module.exports = app;

// provide information to console
console.log('Server running at http://localhost:3000');