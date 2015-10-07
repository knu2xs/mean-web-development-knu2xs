/* globals require, module */

// based on the environment, load the correct settings file
module.exports = require('./env/' + process.env.NODE_ENV);
