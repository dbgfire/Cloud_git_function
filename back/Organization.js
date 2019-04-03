var mongoose = require('mongoose');

//define the schema for our user model
var userSchema = mongoose.Schema({	
	Organization_name: String,
	Members: Number,
	With_repositories: Number,
	Organization_repositories: Number,
	Organization_top_languages: Object,
	updated_date: Date,
	Organization_members_repositories: Number,
    Top_languages: Object,
    Top_Organization_members_repositories:Object
    
});

//create the model for users and expose it to our app
module.exports = mongoose.model('organization', userSchema);


