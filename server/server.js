//dependancies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

//middleware functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());


//Routers
const hangoutRouter = require('./routes/hangout');
app.use('/hangout', hangoutRouter);

//database connection
mongoose.connect('mongodb://localhost/hangouts', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("Database Connected");
});

app.listen(4000, function() {
    console.log("Server is up");
});

module.exports = app;