// import mongoose and create a schema instance
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// create a user schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});

// use user schema instance to define user model for mongoose
mongoose.model('User', UserSchema);