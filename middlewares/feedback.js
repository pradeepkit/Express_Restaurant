'use strict';
var nodemailer = require('nodemailer');
var Feedback = require('../models/Feedback');
function feedback (req, res){
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
  
    var newFeedback = new Feedback({
        name : req.body.name,
        mobile_no : req.body.mobile_no,
        email : req.body.email,
        date : req.body.date,
        feedback : req.body.feedback,
    })

    newFeedback.save(function(err) {
        if (err) {
            res.status(400).send(err)
        }else{
            var mailOptions = {
                from: '"Restaurant Mail" <samplefsdstudent@gmail.com>',
                to: req.body.email,
                subject: 'Your Feedback is Received!',
                text: 'Thank you ' + newFeedback.name + ' for your precious time to send us feedback. We take the feedbacks from our users seriously and we will review the feedback in order to improve our services and quality of products.' 
            };
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) res.status(400).send(error);
                res.end('Success')
            });
        }
    });
}
module.exports = feedback;