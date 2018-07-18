var express = require('express');
var router = express.Router();
var storyLine = require('../models/storyLine');



router.get('/beginning', function(req, res, next) {
  
  let item = storyLine.parts.find(spart => {
    return spart.storyPart === 'beginning'; //this defines storyPart while you are on the respective page. 
  });
  res.render('beginning', { item });
  console.log(req.url);
});


router.get('/middle', function(req, res, next) {
  
  let item = storyLine.parts.find(spart => {
    return spart.storyPart === 'middle';
  });
  res.render('middle', { item });
  console.log(req.url);
});


router.get('/end', function(req, res, next) {

 let item = storyLine.parts.find(spart => {
   return spart.storyPart === 'end';
 });
  res.render('end', { item });
  console.log(req.url);
});

module.exports = router;
