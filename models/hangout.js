const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HangoutSchema = new Schema({
    name: String,
    location:String,
    cost_range:Number,
    
});

module.export = mongoose.model('Hangout', HangoutSchema);
