/* globals require, module*/

// set the node environment to development if parameter is not provided
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// create express application instance
var express = require('./config/express');

// create our custom application instance
var app = express();

// listen on port 3000
app.listen(3000);

// return the application
module.exports = app;

// provide information to console
console.log('Server running at http://localhost:3000');