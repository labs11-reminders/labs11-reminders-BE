const express = require('express');

const authRoutes = express.Router();

const passport = require('passport');

//Auth0
    //endpoint route handler that performs the login
    //after login Auth0 will redirect user to the callback API
authRoutes.get('/login', passport.authenticate('aut0', {
    scope: 'openid email profile'
}), function (req, res) {
    res.direct('/');
});

    //endpoint route handler that finalizes authentication
    //it will then redirect the user to the requested URL or to '/user' endpoint
authRoutes.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
        if (err) {return next(err);}
        if (!user) {return res.redirect('/login');}
        req.logIn(user, function (err) {
            if (err) {return next(err);}
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            res.redirect(returnTo || '/user');
        });
    })(req, res, next);
});

    //endpoint route handler that will log a user out
    //and then redirect them to the homepage/landing page
authRoutes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// end Auth0

module.export = authRoutes;