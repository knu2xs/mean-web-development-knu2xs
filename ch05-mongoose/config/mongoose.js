// import the config and mongoose
var config = require('./config'),
  mongoose = require('mongoose');

// return the connection to the database
module.exports = function(){
  return mongoose.connect(config.db);
};