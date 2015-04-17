var express = require('express');
var router = express.Router();
var lenses = require('../controllers/lenses');

router.get('/', lenses.index);
router.get('/new', lenses.new);
router.post('/', lenses.create);
router.get('/:id', lenses.show);
router.get('/:id/edit', lenses.edit);
router.put('/:id', lenses.update);
router.del('/:id', lenses.destroy);

module.exports = router;
