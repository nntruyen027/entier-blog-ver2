var express = require('express');
const path = require('path');
var router = express.Router();
var contactModel = require('../models/contact');

/* GET home page. */
router.get('/', function (req, res, next) {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'index.html'));
  res.sendFile(file_path)
});

router.get('/introduce', (req, res, next) => {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'introduce.html'));
  res.sendFile(file_path)
})

router.post('/', (req, res, next) => {
  console.log(req);
  console.log(req.body);
  contactModel.create({
    name: req.body['contact-name'],
    email: req.body['contact-mail'],
    phone: req.body['contact-phone'],
    address: req.body['contact-address'],
    job: req.body['contact-who'],
    other: req.body['contact-other']
  })
    .then(data => {
      console.log('Đã thêm dữ liệu')
      res.status(200).send('Gửi dữ liệu thành công');
    })
    .catch(err => {
      res.status(500).send('Thất bại')
      console.log('Thêm thất bại')
    })

})


module.exports = router;
