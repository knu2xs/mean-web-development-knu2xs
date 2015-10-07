/* globals require */
'use strict';

// import the users controller module
var users = require('../controllers/users.server.controller');

// export routes
module.exports = function(app){

  // users routes
  app.route('/users')

    // create a new user when post received
    .post(users.create)

    // return list of users on get
    .get(users.list);

  // single user route
  app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);

  // middleware to handle parameter in url, converting a user object to json
  app.param('userId', users.userByID);
};