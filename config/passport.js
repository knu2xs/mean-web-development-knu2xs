'use strict';

var passport = require('passport'),
  mongoose = require('mongoose');

module.exports = function() {
  var User = mongoose.model('User');

  // when user authenticated, save userid to the session
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  // when user object needed, retrieve the user object from the database
  passport.deserializeUser(function(id, done){
    User.findOne({
      _id: id
    }, '-password -salt', function(err, user){
      done(err, user);
    })
  });

  // include the local strategies configuration file
  require('./strategies/local')();

};