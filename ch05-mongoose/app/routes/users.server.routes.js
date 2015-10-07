// Load the users controller
var users = require('../../app/controllers/users.server.controller');

// Define the routes module method
module.exports = function(app) {
  // Set up the 'users' base routes
  app.route('/users')
    .post(users.create);
};