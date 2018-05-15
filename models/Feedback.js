var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Feedback Schema
    feedbackSchema = new Schema({
    	name : {
    		type : String,
    		required : true,
    		unique : true
    	},
        email : {
            type : String,
            required : true
        },
    	mobile_no : {
    		type : String,
    		required : true
    	},
        feedback : {
            type : String,
            required : true
        },
    	date : {
    		type : Date,
    		required : true
    	}
    })

    // we need to create a model using the Schema
    Feedback = mongoose.model('Feedback', feedbackSchema);

    // make this available to our users in our Express application
    module.exports = Feedback;


