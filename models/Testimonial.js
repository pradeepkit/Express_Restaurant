var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Testimonial Schema
    testimonialSchema = new Schema({
    	name : {
    		type : String,
    		required : true,
    		unique : true
    	},
    	content : {
    		type : String,
    		required : true
    	},
    	name : {
    		type : String,
    		required : true
    	},
    	rating : {
    		type : Number,
    		required : true
    	},
    	date : {
    		type : Date,
    		required : true
    	}
    })

    // we need to create a model using the Schema
    Testimonial = mongoose.model('Testimonial', testimonialSchema);

    // make this available to our users in our Express application
    module.exports = Testimonial;


