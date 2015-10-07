// import the config and mongoose
var config = require('./config'),
  mongoose = require('mongoose');

// return the connection to the database
module.exports = function(){

  // connect to mongodb instance using configuration based on environment
  var db = mongoose.connect(config.db);

  // create a user model
  require('../app/models/user.server.model');

  // return the mongoose connection
  return db;
};