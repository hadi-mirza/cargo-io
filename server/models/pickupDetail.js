const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var newRequestSchema = new mongoose.Schema({
    when:{
        type:String,
        required:true,
    },
    pickupType:{
        type:String,
        required:true,
    },
    itemType:[{
        type:String,
        required:true,
    }],
    itemDesc:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    pickupLocation:[{
        type:String,
        required:true,
    }],
});

//Export the model
module.exports = mongoose.model('newRequest', newRequestSchema);