var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Menu Schema
    menuSchema = new Schema({
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
        type : {
            type : String,
            required : true
        },
    	price : {
    		type : Number,
    		required : true
    	},
    	number : {
    		type : Number,
    		required : true
    	},
    	rating : {
    		type : Number,
    		required : true
    	},
        checked : {
            type : Boolean,
            required : true
        }
    })

    // we need to create a model using the Schema
    Menu = mongoose.model('Menu', menuSchema);

    // make this available to our users in our Express application
    module.exports = Menu;


