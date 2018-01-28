const express = require('express')
const router = express.Router()
const xmlparser = require('express-xml-bodyparser')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send(req.query.echostr)
})
router.post('/*', xmlparser({trim: false, explicitArray:false}), function(req, res, next) {
  let data = `<xml><ToUserName>${req.body.xml.fromusername}</ToUserName> <FromUserName>${req.body.xml.tousername}</FromUserName> <CreateTime>${req.body.xml.createtime}</CreateTime> <MsgType>${req.body.xml.msgtype}</MsgType> <Content>'你好啊！'</Content></xml>`
  res.writeHead(200, {'Content-Type': 'application/xml'});
  res.end(data);
});

module.exports = router;
