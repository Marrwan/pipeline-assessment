var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

// route for how old
router.get('/howOld', controllers.index);









module.exports = router;
