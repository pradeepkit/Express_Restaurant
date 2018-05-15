var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Newsletter Schema
    newsletterSchema = new Schema({
        email : {
            type : String,
            required : true
        },
    	date : {
    		type : Date,
    		required : true
    	}
    })

    // we need to create a model using the Schema
    Newsletter = mongoose.model('Newsletter', newsletterSchema);

    // make this available to our users in our Express application
    module.exports = Newsletter;


