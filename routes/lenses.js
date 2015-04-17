var express = require('express');
var router = express.Router();

/* GET new page. */
router.get('/new', function(req, res) {
  res.render('lenses/new.hbs');
});

module.exports = router;
