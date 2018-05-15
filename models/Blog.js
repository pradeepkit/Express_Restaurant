var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Blog Schema
    blogSchema = new Schema({
        id : {
            type : Number,
            required : true,
            unique : true
        },
    	title : {
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
        uploaded_by : {
            type : String,
            required : true
        },
    	date : {
    		type : Date,
    		required : true
    	},
        content : [
            {
                type : String
            }
        ]
    })

    // we need to create a model using the Schema
    Blog = mongoose.model('Blog', blogSchema);

    // make this available to our users in our Express application
    module.exports = Blog;


