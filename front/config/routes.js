var home = require('../app/controllers/home');

//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/login', home.login);
    app.get('/signup', home.signup);

    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    app.get('/login/github',
    passport.authenticate('github'));
  
    app.get('/return', 
        passport.authenticate('github', { failureRedirect: '/login' }),
        function(req, res) {
        res.redirect('/home');
        });
  
    app.get('/logout', function(req, res){
            req.logout();
            res.redirect('/');
    });
    app.get('/info',function(req, res){res.render('info.ejs')});
}
