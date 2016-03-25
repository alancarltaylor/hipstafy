var express = require('express');
var router = express.Router();
var fs = require('fs');
var snippets = require('../lib/snippets')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  if (req.body.phrase){
        var userInputSplit = req.body.phrase.split(/\s/g);
        var hipstaphrase = "";
        for (var i = 0; i < userInputSplit.length; i ++){
          hipstaphrase += userInputSplit[i] + " " + snippets[(Math.floor(Math.random() * snippets.length))] + "<br>"
         }
        res.render('index', { phrase: hipstaphrase})
      } else {
    res.render('index', {error: "Nothing provided"});
  }
});


module.exports = router;
