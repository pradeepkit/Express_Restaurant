'use strict';
var nodemailer = require('nodemailer');
var Newsletter = require('../models/Newsletter');
function newsletter (req, res){
	let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
		secure : false,
		port : 587,
        	auth: {
            	user: 'samplefsdstudent@gmail.com',
            	pass:'ankit939'
        	},
		tls : {
			rejectUnauthorized : false
		}
    });
  
    var newNewsletter = new Newsletter({
        email : req.body.email,
        date : req.body.date
    })

    newNewsletter.save(function(err) {
        if (err) {
            res.status(400).send(err)
        }else{
            var mailOptions = {
                from: '"Restaurant Mail" <samplefsdstudent@gmail.com>',
                to: req.body.email,
                subject: 'Subscribed with Restaurant!',
                text: 'Dear User, you have successfully subscribed with Restaurant to receive our daily newsletter on your mail. We are available 24x7 to assist you if you have any issues or queries.' 
            };
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) res.status(400).send(error);
                res.end('Success')
            });
        }
    });
}
module.exports = newsletter;