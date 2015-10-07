/* globals require, module */

// return the path to the root of the application
module.exports = function(app){

  // import and save the index controller in a variable
  var index = require('../controllers/index.server.controller');

  // provide routing to root of site using the index controller
  app.get('/', index.render);
};