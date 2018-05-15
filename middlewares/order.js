'use strict';
var nodemailer = require('nodemailer');
var Order = require('../models/Order');
function postOrder (req, res){
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
  
    var orderList = '';
    req.body.products.forEach(function(product){
        orderList += product.name + ', ';
    })

    orderList.substr(0,orderList.length - 1);
    
    var newOrder = new Order({
        ref_id : Math.random().toString(36).substr(2, 9),
        date : req.body.date,
        total_amount : req.body.total_amount,
        products : req.body.products,
        address_details : req.body.address_details,
        contact_details : req.body.contact_details,
        card_details : req.body.card_details
    })

    console.log(newOrder);

    newOrder.save(function(err) {
        if (err) {
            res.status(400).send(err)
        }else{
            var date = newOrder.date;
            date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
            var time = newOrder.date.getHours() + ':' + newOrder.date.getMinutes() + ' GMT +5:30(IST)';
            var mailOptions = {
                from: '"Restaurant Mail" <samplefsdstudent@gmail.com>',
                to: req.body.contact_details.email,
                subject: 'Confirmed! Your request for online order at Restaurant is successful.',
                text: 'The Reference ID of your order is: ' + newOrder.ref_id + '.\n The order is placed on ' + date + ' at ' + time + ' for Products- ' + orderList + '\n The total amount including all taxes is - $' + newOrder.total_amount + '. The order will be delivered in next 30 minutes.\n We are available to assist you for any queries.' 
            };
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) res.status(400).send(error);
                res.json({ref_id : newOrder.ref_id});
            });
        }
    });
}

function getOrder(req, res){
    Order.find({ref_id : req.params.ref_id}, function (err, order) {
        if (err) return err;
        res.json(order);
    })
}

module.exports = {
    get : getOrder,
    post : postOrder
};