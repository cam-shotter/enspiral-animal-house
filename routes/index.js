var express = require('express');
var router = express.Router();
var guestDb = require('../data/guestDb');

var addName
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

router.get('/feed', function(req, res) {
  res.render('feed', { name: 'test' });
});

router.post('/welcome', function(req, res) {
  // guestDb.insertName(req.body.name)
  // // .catch(logError)
  // res.redirect('./welcome')

  addName = req.body.name
  console.log("this is the addName: ", addName)
  res.render('./welcome',{ name: addName, title: 'Enspiral Database of Animals' })
});

// function logError (err) {
//   console.log(err.message);
//   // res.status(500).send("Can't display page!")
// }

module.exports = router;
