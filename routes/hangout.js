const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Hangout = require('../models/hangout.js');

//Gets all hangouts
router.get('/', function(req, res, next){
    Hangout.find(function(err, hangouts){
        if (err) return next(err);
        res.json(hangouts);
    });
});
//Gets a random hangout

//Creates a hangout 
router.post('/', function(req,res, next){
    Hangout.create(req.body, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});
//Updates Hangout 
router.put('/:id', function(req, res, next){
    Hangout.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});
//Deletes a hangout 
router.delete('/:id', function(req, res, next) {
    Hangout.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;






