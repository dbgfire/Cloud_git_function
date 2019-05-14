var express = require('express');
var stats = require('./stats.js');
var app = express();
var port = process.env.PORT || 8040;
// var mongoose = require('mongoose');
// var orga= require('./Organization.js');
/***************Mongodb configuratrion********************/
// var mongoose = require('mongoose');
// var configDB = require('./config/database.js');
//configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database

app.get('/stats',function (req, res) {
    res.send(stats);
  });

// app.route('/stats/:orga').get(function(req,res){ 
//       res.json({message : "Vous souhaitez accéder aux informations de l'organisation " + req.params.orga});
//       orga.findOne({ 'Organization_name' :  req.params.orga }, function(err, orga) {
//         if (err){
//             res.json("Organisation non trouver:");
//             return done(err);
//         }
//         if (orga) {
//           res.json("Organisation trouver:");
//         } else {
          
//           res.json("Organisation non trouver l'on recupere les données");
//       //  User.find().sort([['_id', 'descending']]).limit(1).exec(function(err, userdata) {	

         
//       //       // if there is no user with that email
//       //       // create the user
//       //       var newUser            = new User();

//       //       // set the user's local credentials
            
//       //      var day =dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");
          
//       //      var active_code=bcrypt.hashSync(Math.floor((Math.random() * 99999999) *54), null, null);
          
           
//       //           newUser.mail    = email;
//       //           newUser.password = newUser.generateHash(password);
//       //           newUser.name = req.body.username;
//       //           newUser.created_date = day;
//       //           newUser.updated_date = day;
//       //           newUser.status = 'active'; //inactive for email actiavators
//       //           newUser.active_hash = active_code;
//       //           //newUser._id = userdata[0]._id+1;


//       //       // save the user
//       //       newUser.save(function(err) {
//       //           if (err)
//       //               throw err;

//       //         /*  var email            = require('../lib/email.js');
//       //           email.activate_email(req.body.username,req.body.email,active_code);
//       //                               return done(null, newUser,req.flash('success', 'Account Created Successfully,Please Check Your Email For Account Confirmation.'));
//       //           */
//       //           return done(null, newUser,req.flash('success', 'Account Created Successfully'));
                
//       //           req.session.destroy();
            
//       //       });
            
//       //     });
       
            
//         }

//     });  
// })

app.route('/').all(function(req,res){ 
    res.json({message : "Bienvenue sur notre  API ", methode : req.method});
});
//launch ======================================================================
app.listen(port);
console.log('port de app : ' + port);

exports = module.exports = app;