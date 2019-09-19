const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hangoutSchema = new Schema({
    name: String,
    location:String,
    cost:Number,  
});

module.exports = mongoose.model('Hangout', hangoutSchema);
