/* globals exports */

// application controller
exports.render = function(req, res){

  // render index using ejs views template
  res.render('index', {

    // set variable for use in template
    title: 'Hello World'
  });
};