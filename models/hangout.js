const mongoose = require('mongoose');

let HangoutSchema = new mongoose.Schema({
    name: String,
    location:String,
    cost_range:Number,
    
});

module.export = mongoose.model('Hangout', HangoutSchema);
