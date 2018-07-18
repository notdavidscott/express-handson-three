var express = require('express');
var router = express.Router();
var storyLine = require('../models/storyLine');

/* GET home page. */
router.get('/beginning', function(req, res, next) {
  res.render('beginning', { storyLine });
});

router.get('/middle', function(req, res, next) {
  res.render('middle', { storyLine });
});

router.get('/end', function(req, res, next) {
  res.render('end', { storyLine });
});
module.exports = router;
