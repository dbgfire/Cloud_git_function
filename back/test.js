/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
//configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database


var orga= require('./Organization.js');

var dateFormat = require('dateformat');
var newOrga= new orga();
var day =dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");



newOrga.Organization_name= "zenika";
newOrga.Members= 28;
newOrga.With_repositories= 28;
newOrga.Organization_repositories= 188;
newOrga.Organization_top_languages= {"JavaScript": 52, "Java": 39, "HTML": 26, "Shell": 8, "Go": 7, "Dockerfile": 6, "CSS": 5, "TypeScript": 5, "Kotlin": 4, "Vue": 4};
newOrga.updated_date= day;
newOrga.Organization_members_repositories= 416;
newOrga.Top_languages= {"JavaScript": 155, "Java": 84, "HTML": 25, "Python": 15, "TypeScript": 15, "Shell": 12, "CSS": 12, "C++": 10, "Go": 7, "PHP": 7};
newOrga.Top_Organization_members_repositories={"generator-gulp-angular (Swiip)": 3853,
"kafkastreams-cep (fhussonnois)":199, 
"compo (Swiip)":67,
"jquery-springmvc-jpa (Swiip)": 48,
"docker-storm (fhussonnois)": 40,
"java8-streams-and-exceptions (hgwood)": 33 ,
" gitmoji-changelog (frinyvonnick)": 30 ,
"vanilla-modern-js (Swiip)": 25,
 "storm-trident-elasticsearch (fhussonnois)": 22, 
 "kafkacli (fhussonnois)": 21};

newOrga.save(function(err) {
    if (err)
        throw err;

    console.log('success');
   return 0;

});

