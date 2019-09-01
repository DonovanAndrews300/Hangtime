const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const hangout = require('./routes/hangout');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());

app.listen(4000, function() {
    console.log("Server is up");
});