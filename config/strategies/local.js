'use strict';

// import passport and the local authentication strategy
var passport = require('passport'),
  LocalStrategy = require('passport=local').Strategy;

// import the mongoose user model
User = require('mongoose').model('User');

module.exports = function() {

  // use the passport local strategy for user authentication
  passport.use(new LocalStrategy(function(username, password, done){

    // use the mongoose findOne method to find the user based on the username
    User.findOne({
      username: username
    }, function(err, user) {

      // if an error is encountered, bingo out
      if (err) {
        return done(err);
      }

      // if a user is not found, return indicative message
      if (!user) {
        return done(null, false, {
          message: 'Unknown user'
        });
      }

      // if the password is invalid
      if (!user.authenticate(password)){
        return done(null, false, {
          message: 'Invalid password'
        });
      }

      // if we make it this far, the user is valid and can be returned to the client
      return done(null, user);

    })
  }));
};