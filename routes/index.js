var express = require('express');
const path = require('path');
var router = express.Router();
var contactModel = require('../models/contact');
const passport = require('../configs/passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'index.html'));
  res.sendFile(file_path)
});

router.get('/introduce', (req, res, next) => {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'introduce.html'));
  res.sendFile(file_path)
})

router.get('/login', (req, res, next) => {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'login.html'));
  res.sendFile(file_path);
})

router.post('/login', passport.authenticate('local-login', {
  failureRedirect: '/login',
  failureFlash: false
}), (res, req, next) => {
  req.redirect('/');
})

router.post('/', (req, res, next) => {
  contactModel.create({
    name: req.body['contact-name'],
    email: req.body['contact-mail'],
    phone: req.body['contact-phone'],
    address: req.body['contact-address'],
    job: req.body['contact-who'],
    other: req.body['contact-other']
  })
    .then(data => {
      res.status(200).json({ message: 'Gửi dữ liệu thành công' });
    })
    .catch(err => {
      res.status(500).send({ message: 'Gửi thất bại' })
    })

})


module.exports = router;
