
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

//define the schema for our user model
var member = mongoose.Schema({	
	login: String,
	name: String,
	status: String,
	repositories: Object,
	numvberOfRepo:Int32Array,
	updated_date: Date
});


//methods ======================
//generating a hash
member.methods.generateHash = function(password) {
 return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
member.methods.validPassword = function(password) {
 return bcrypt.compareSync(password, this.password);
};

//create the model for users and expose it to our app
module.exports = mongoose.model('members', member);