/* globals require, exports */
'use strict';

// create user object
var User = require('mongoose').model('User');

// provide create method to create a new user from posted json
exports.create = function(req, res, next){

  // create user object instance from json in the body
  var user = new User(req.body);

  // save the user to the database
  user.save(function(err){

    // check to ensure an error was not thrown when trying to save
    if(err){

      // pass control to next middleware with error
      return next(err);
    }else{

      // return json to client after saving
      res.json(user);
    }
  });
};

// provide method to find all records
exports.list = function(req, res, next){
  User.find({}, function(err, users){
    if(err){
      return next(err);
    }else{
      res.json(users);
    }
  })
};

// middleware helper responding with json representation of user object
exports.read = function(req, res){
  res.json(req.user);
};

// retrieve single user
exports.userByID = function(req, res, next, id){
  User.findOne({
    _id: id
  }, function(err, user){
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  })
};

// provide method to update existing user
exports.update = function(req, res, next){
  User.findByIdAndUpdate(req.user.id, req.body, function(err, user){
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

// provide method to delete existing users
exports.delete = function(req, res, next){
  req.user.remove(function(err){
    if(err){
      return next(err);
    } else {
      res.json(req.user);
    }
  });
};