/* globals require */

// import mongoose and reference schema
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// create user schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function(password){
        return password.length >= 6;
      },
      'Password should be longer'
    ]
  },
  created: {
    type: Date,
    default: Date.now
  },
  website: {
    type: String,
    get: function(url) {
      if (!url) {
        return url;
      } else {
        if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
          url = 'http://' + url;
        }
        return url;
      }
    }
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  }
});

// create virtual properties
UserSchema.virtual('fullName').get(function(){
  return this.firstName + ' ' + this.lastName;
});

// enable schema property runtime modifiers
UserSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

// register model with mongoose
mongoose.model('User', UserSchema);