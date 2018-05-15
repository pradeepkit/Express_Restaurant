var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    // create the Order Schema
    OrderSchema = new Schema({
    	ref_id : {
    		type : String,
    		required : true,
    		unique : true
    	},
        date : {
            type : Date,
            default : Date.now,
            require : true
        },
        total_amount : {
            type : Number,
            required : true
        },
    	products : [{
            name : {
                type : String,
                require : true
            },
            image : {
                type : String,
                require : true
            },
            price : {
                type : Number,
                require : true
            },
            number : {
                type : Number,
                require : true
            },
            description : {
                type : String,
                require : true
            },
            type : {
                type : String,
                require : true
            }
        }],
        address_details : {
            country : {
                type : String,
                require : true
            },
            city : {
                type : String,
                require : true
            },
            state : {
                type : String,
                require : true
            },
            pin_code : {
                type : Number,
                require : true
            },
            address : {
                type : String,
                require : true
            }
        },
        contact_details : {
            first_name : {
                type : String,
                require : true
            },
            last_name : {
                type : String,
                require : true
            },
            email : {
                type : String,
                require : true
            },
            mobile_no : {
                type : String,
                require : true
            }
        },
        card_details : {
            card_type : {
                type : String,
                require : true
            },
            card_holder : {
                type : String,
                require : true
            },
            card_number : {
                type : Number,
                require : true
            },
            expiry_date : [{
                month : {
                    type : Number,
                    require : true
                },
                year : {
                    type : Number,
                    require : true
                }
            }],
            cvv : {
                type : Number,
                require : true
            }
        }
    })

    // we need to create a model using the Schema
    Order = mongoose.model('Order', OrderSchema);

    // make this available to our users in our Express application
    module.exports = Order;


