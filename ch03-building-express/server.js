/* globals require, module*/

// import and instantiate express application
var app = require('express')();

// create route for hello world
app.use('/', function(req, res){
  res.send('Hello World');
});

// listen on port 3000
app.listen(3000);
console.log('Server running at http://localhost:3000');

// return the application object
module.exports = app;