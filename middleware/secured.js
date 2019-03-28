
//middleware that will protect routes and only allow a user
//to visit them if they are logged in
module.exports = function () {
    return function secured (req, res, next) {
      if (req.user) { return next(); }
      req.session.returnTo = req.originalUrl;
      res.redirect('/auth0/login');
    };
  };