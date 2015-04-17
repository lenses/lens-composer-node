var Lens = require('../models/lens');

// load a lens
exports.load = function (req, res, next, id) {
  // set req.lens
  next()
}

// list lenses
// GET /lenses
exports.index = function (req, res) {
  // render lenses/index
}

// new lens
// GET /lenses/new
exports.new = function (req, res) { 
  res.render('lenses/new.hbs');
}

// create lens
// POST /lenses
exports.create = function (req, res) {
  var lens = new Lens({
    // TODO: set params
  });
      lens.save();
  
  // render lenses/new if err
  // redirect to lenses/:id if created
}

// show lens
// GET /lenses/:id
exports.show = function (req, res) {
  // render lenses/show
}

// edit lens
// GET /lenses/:id/edit
exports.edit = function (req, res) {
  // render lenses/edit
}

// update lens
// PUT /lenses/:id
exports.update = function (req, res) {
  // render lenses/edit if err
  // redirect to /lenses/:id if updated
}

// delete lens
// DEL /lenses/:id
exports.destroy = function (req, res) {
  // redirect to /lenses
}