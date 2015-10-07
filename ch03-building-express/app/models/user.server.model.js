/* globals require */

// import mongoose and reference schema
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// create user schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});

// register model with mongoose
mongoose.model('User', UserSchema);