var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var request = require('request');

exports.loggedIn = function(req, res, next)
{
	if (req.session.user) { // req.session.passport._id

		next();

	} else {

		res.redirect('/login');

	}

}

exports.home = function(req, res) {
	request('http://localhost:8040/stats', function (error, response, body) {
  		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		//console.log('body:', body); // Print the HTML for the Google homepage.
		var data=  JSON.parse(body);
		console.log(data.Top_languages)
		console.log(data.Top_languages[0])
		  res.render('home.ejs', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session,
			Organization:data.Organization,
			Members:data.Members,
			With_repositories:data.With_repositories,
			Organization_repositories:data.Organization_repositories,
			Organization_members_repositories:data.Organization_members_repositories,
			Top_languages:data.Top_languages

		 });
	});
	

	 
}


exports.signup = function(req, res) {

	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('signup', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}

}


exports.login = function(req, res) {


	
	if (req.session.user) {

		res.redirect('/home');

	} else {

		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});

	}
	
}


    
