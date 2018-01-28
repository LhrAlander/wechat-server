var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  console.log(req.query)
  res.send(req.query.echostr)
});

module.exports = router;
