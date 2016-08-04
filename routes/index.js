var express = require('express');
var router = express.Router();

var addName
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enspiral Database of Animals', name: "test" });
});

router.get('/welcome', function(req, res, next) {
  addName = req.body.name
  console.log("this is the addName second attempt: ", addName)
  res.render('welcome', { title: 'Enspiral Database of Animals', name: addName});
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { name: 'test' });
});

router.post('/welcome', function(req, res) {
  addName = req.body.name
  console.log("this is the addName: ", addName)
  res.render('./welcome',{ name: addName, title: 'Enspiral Database of Animals' })

});

module.exports = router;
