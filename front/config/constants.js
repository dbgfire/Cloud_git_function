require('dotenv').config()
module.exports = {
        'project_name':'express-mvc-generator',
	'adminname': 'Rajaram',
	'adminmail': 'test@gmail.com',
	'host':`${process.env.URL_BACK}`,
	'email_smtp_host':'Your Email SMTP',
	'email_smtp_port':'YOUR SMTP PORT',
	"smtp_from_eamil":"from@email.com",
	"smtp_from_name":"express-mvc-generator",
	"alert_email":"aler@email.com",
	"alert_email_name":"Aler Name",
};