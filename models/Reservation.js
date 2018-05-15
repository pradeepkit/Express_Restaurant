var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Reservation Schema
    reservationSchema = new Schema({
    	ref_id : {
    		type : String,
    		required : true,
    		unique : true
    	},
    	name : {
    		type : String,
    		required : true
    	},
    	email : {
    		type : String,
    		required : true
    	},
    	mobile_no : {
    		type : String,
    		required : true
    	},
    	date : {
    		type : Date,
    		required : true
    	},
    	time : {
    		type : String,
    		required : true
    	},
    	person_count : {
    		type : Number,
    		required : true
    	}
    })

    // we need to create a model using the Schema
    Reservation = mongoose.model('Reservation', reservationSchema);

    // make this available to our users in our Express application
    module.exports = Reservation;


