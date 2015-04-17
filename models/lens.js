var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lensSchema = new Schema({
  name: { type: String },
  author: { type: String },
  currentState: { type: Array }
});

module.exports = mongoose.model('Lens', lensSchema);