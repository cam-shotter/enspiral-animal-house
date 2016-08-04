var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Enspiral Database of Animals', name: "Cam" });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { name: name });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { name: name });
});

module.exports = router;
