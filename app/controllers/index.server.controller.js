/* globals exports */

// application controller
exports.render = function(req, res){

  // check to see if the user has previously visited the site
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }

  // set the session variable to the current date for the next visit
  req.session.lastVisit = new Date();

  // render index using ejs views template
  res.render('index', {

    // set variable for use in template
    title: 'Hello World'
  });
};