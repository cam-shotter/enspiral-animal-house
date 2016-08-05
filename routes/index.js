var express = require('express');
var router = express.Router();
var guestDb = require('../data/guestDb');

var addName
var searchAnimal
var displayOops
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/welcome', function(req, res) {
  addName = req.body.name
  console.log("this is the addName second attempt: ", addName)
  res.render('welcome', { title: 'Enspiral Database of Animals', name: addName});
});

router.get('/oops', function(req, res) {

      res.render('./oops');
});

router.post('/welcome', function(req, res) {
  addName = req.body.name
  console.log("this is the addName: ", addName)
  res.render('./welcome',{ name: addName, title: 'Enspiral Database of Animals' })
});

router.post('/feed', function(req, res, next) {
  searchAnimal = req.body.animal
  // console.log("this is the animal: ", searchAnimal)
  guestDb.getUserName(searchAnimal)
    .then(function(favAnimalData) {
      console.log("Hey oops", favAnimalData)
      if(favAnimalData.length == 0){
        res.redirect('./oops')
        return
      }
      res.render('./feed', { favAnimalData: favAnimalData })
    })
    // else {res.redirect('./oops')}
    .catch(logError)
})

function logError (err) {
  console.log(err.message);
  res.status(500).send("Can't display page!")
}

module.exports = router;
