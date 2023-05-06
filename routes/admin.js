var express = require('express');
const path = require('path');
var router = express.Router();
var contactModel = require('../models/contact');
const passport = require('../configs/passport');

/* GET admin page. */
router.get('/add-post', function (req, res, next) {
    var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'add_post.html'));
    res.sendFile(file_path)
});


module.exports = router;
