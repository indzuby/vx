var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var userSchema = new Schema({
  'id': String,
  'password': String,
  'level': Number
});

var user = mongoose.model('user', userSchema);

module.exports = {
  'user': user
};
