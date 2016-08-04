var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enspiral Database of Animals', name: "test" });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Enspiral Database of Animals', name: 'test' });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { name: 'test' });
});

module.exports = router;
