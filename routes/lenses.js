var express = require('express');
var router = express.Router();
var lenses = require('../controllers/lenses');

/* GET new page. */
router.get('/', lenses.index);
router.get('/new', lenses.new);
router.get('/new/post', lenses.create);

module.exports = router;
