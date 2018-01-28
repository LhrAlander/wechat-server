const express = require('express')
const router = express.Router()
const xmlparser = require('express-xml-bodyparser')

/* GET home page. */
router.get('/*', xmlparser({trim: false, explicitArray:false}), function(req, res, next) {
  console.log(req.body)
  res.send('hello')
});

module.exports = router;
