const express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const hangout = require('./routes/hangout');
const app = express();



mongoose.connect('mongodb://localhost/hangouts', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("Database Connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/routes/hangout', hangout);
app.use(cors());
app.use(bodyParser.json());

app.listen(4000, function() {
    console.log("Server is up");
});