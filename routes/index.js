var express = require('express');
var router = express.Router();
var guestDb = require('../data/guestDb');

var addName
var searchAnimal
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/welcome', function(req, res) {
  // guestDb.getUserName()
  // .then( function (user) {
  //   res.render('welcome', {users: user})
  // })
  // .catch(logError)
  addName = req.body.name
  console.log("this is the addName second attempt: ", addName)
  res.render('welcome', { title: 'Enspiral Database of Animals', name: addName});
});

// router.get('/feed', function(req, res) {
//   guestDb.getUserName()
//     .then(function(favAnimalData) {
//         res.render('feed', { favAnimalData: favAnimalData });
//     })
//     .catch(logError)
// });

router.post('/welcome', function(req, res) {
  addName = req.body.name
  console.log("this is the addName: ", addName)
  res.render('./welcome',{ name: addName, title: 'Enspiral Database of Animals' })
});

router.post('/feed', function(req, res) {
  searchAnimal = req.body.animal
  console.log("this is the animal: ", searchAnimal)
  guestDb.getUserName(searchAnimal)
  // .then( if (searchAnimal) )
    .then(function(favAnimalData) {
      res.render('./feed', { favAnimalData: favAnimalData })
    })
    .catch(logError)
})

function logError (err) {
  console.log(err.message);
  res.status(500).send("Can't display page!")
}

module.exports = router;
