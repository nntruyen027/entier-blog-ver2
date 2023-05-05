var express = require('express');
const path = require('path');
var router = express.Router();

/* GET new page. */
router.get('/', function (req, res, next) {
    var file_path = path.join(path.join(__dirname.replace('routes', 'views'), 'news.html'));
    res.sendFile(file_path)
});


module.exports = router;
