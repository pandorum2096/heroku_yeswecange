var express = require('express');
var router = express.Router();

/* GET home page YesWeCange. */
router.get('/', function(req, res, next) {
  res.json({message: 'YesWeCange'});
});

module.exports = router;
