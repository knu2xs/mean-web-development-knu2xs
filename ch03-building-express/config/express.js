/* globals module, require, process */

// import modules, starting with the configuration
var config = require('./config'),
  express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session');

// return the application
module.exports = function(){

  // create express application instance
  var app = express();

  // provide different run options based on environment
  // if development environment
  if (process.env.NODE_ENV === 'development') {

    // use logging through morgan
    app.use(morgan('dev'));

    // if production environment
  } else if (process.env.NODE_ENV === 'production') {

    // use body compression
    app.use(compress());
  }

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // parse application/json
  app.use(bodyParser.json());

  // enable use of PUT and DELETE verbs where clients do not support it
  app.use(methodOverride());

  // use the session module to prevent monkeying with the site
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  // set views directory
  app.set('views', './app/views');

  // set the view engine to embedded javascript
  app.set('view engine', 'ejs');

  // import the routes, passing the application instance as a parameter
  require('../app/routes/index.server.routes.js')(app);

  // enable serving of static files
  app.use(express.static('./public'));

  // return the express application instance
  return app;
};