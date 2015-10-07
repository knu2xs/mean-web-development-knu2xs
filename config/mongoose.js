/* globals module */
'use strict';

// import modules
var config = require('./config'),
  mongoose = require('mongoose');

// connect to the database and return the connection
module.exports = function(){

  // create database connection
  var db = mongoose.connect(config.db);

  // register the user schema
  require('../app/models/user.server.model');

  // return the database
  return db
};