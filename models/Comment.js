var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Comment Schema
    CommentSchema = new Schema({
    	blog_id : {
    		type : Number,
    		required : true
    	},
    	name : {
    		type : String,
    		required : true
    	},
    	email : {
    		type : String,
    		required : true
    	},
    	image : {
    		type : String,
    		required : true
    	},
    	date : {
    		type : Date,
    		required : true
    	},
        content : {
            type : String,
            required : true
        }
    })

    // we need to create a model using the Schema
    Comment = mongoose.model('Comment', CommentSchema);

    // make this available to our users in our Express application
    module.exports = Comment;


