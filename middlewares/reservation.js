'use strict';
var nodemailer = require('nodemailer'); 
var Reservation = require('../models/Reservation');
function postReservation (req, res){
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

    var newReservation = new Reservation({
        ref_id : Math.random().toString(36).substr(2, 9),
        name : req.body.name,
        email : req.body.email,
        mobile_no : req.body.mobile_no,
        date : req.body.date,
        time : req.body.time,
        person_count : req.body.person_count
    })
    newReservation.save(function(err) {
        if (err) {
            res.status(400);
            res.send(err)
        }else{
            var date = newReservation.date;
            date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
            var mailOptions = {
                from: '"Restaurant Mail" <samplefsdstudent@gmail.com>',
                to: req.body.email,
                subject: 'Confirmed! Your request for reservation at Restaurant is accepted.',
                text: 'The Reservation ID is: ' + newReservation.ref_id +'.\n The table is reserved on ' + date + ' at ' + newReservation.time + 'for ' + newReservation.person_count + ' people.\n We are available to assist you for any queries.' 
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.status(400);
                    res.send(error)
                }
                res.json({ref_id : newReservation.ref_id})
            });
        }
    });
}

function getReservation(req, res){
    Reservation.find({'ref_id' : req.params.ref_id}, function (err, reservation) {
        if (err) return err;
        res.json(reservation);
    })
}

module.exports = {
    get : getReservation,
    post : postReservation
};