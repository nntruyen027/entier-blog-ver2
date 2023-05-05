var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'index.html'));
  res.sendFile(file_path)
});

router.get('/index', (req, res, next) => {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'index.html'));
  res.sendFile(file_path)
})

router.get('/introduce', (req, res, next) => {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'introduce.html'));
  res.sendFile(file_path)
})

router.get('/news', (req, res, next) => {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'news.html'));
  res.sendFile(file_path)
})


router.get('/project', (req, res, next) => {
  var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'project.html'));
  res.sendFile(file_path)
})



module.exports = router;
