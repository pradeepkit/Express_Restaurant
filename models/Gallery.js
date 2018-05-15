var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Gallery Schema
    gallerySchema = new Schema({
    	src : {
    		type : String,
    		required : true
    	}
    })

    // we need to create a model using the Schema
    Gallery = mongoose.model('Gallery', gallerySchema);

    // make this available to our users in our Express application
    module.exports = Gallery;


