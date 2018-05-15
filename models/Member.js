var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Member Schema
    memberSchema = new Schema({
    	name : {
    		type : String,
    		required : true,
    		unique : true
    	},
        image : {
            type : String,
            required : true
        },
    	description : {
    		type : String,
    		required : true
    	},
        facebook_url : {
            type : String,
            required : true
        },
    	twitter_url : {
    		type : String,
    		required : true
    	},
        plus_google_url : {
            type : String,
            required : true
        },
        instagram_url : {
            type : String,
            required : true
        } 
    })

    // we need to create a model using the Schema
    Member = mongoose.model('Member', memberSchema);

    // make this available to our users in our Express application
    module.exports = Member;


