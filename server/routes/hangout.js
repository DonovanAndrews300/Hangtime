const router = require('express').Router(),
    Hangout = require('../models/hangout');

//Gets all hangouts
router.route('/').get((req, res,) => {
    /*Hangout.find(function(err, hangouts){
        if (err) return next(err);
        res.json(hangouts);
    });*/

    Hangout.find()
    .then(hangouts => res.json(hangouts))
    .catch(err => res.status(400).json('Error:' + err));
});

//Creates a hangout 
/*router.post('/', function(req,res, next){
    Hangout.create(req.body, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});*/
    router.route('/add').post((req,res) => {
        const name = req.body.name,
            location = req.body.location,
            cost = Number(req.body.cost);

       const newHangout = new Hangout({
            name,
            location,
            cost,
        });

        newHangout.save()
        .then(() => res.json('saved'))
        .catch(err => res.status(400).json('Error: ' + err));   
    });

//Updates Hangout 
router.put('hangout/:id', function(req, res, next){
    Hangout.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});
//Deletes a hangout 
router.delete('hangout/:id', function(req, res, next) {
    Hangout.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;






