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

  
  router.route('/update/:id').post((req, res) => {
    Hangout.findById(req.params.id)
      .then(hangout => {
        hangout.name = req.body.name;
        hangout.location = req.body.location;
        hangout.cost = req.body.cost;
  
        hangout.save()
          .then(() => res.json('updated'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

//Deletes a hangout 
router.route('/:id').delete((req, res) => {
    Hangout.findByIdAndDelete(req.params.id)
      .then(() => res.json('deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;