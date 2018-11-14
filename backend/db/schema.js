var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  'email': {type : String , index:{unique:true}},
  'password': String,
  'level': Number
});


var fontSchema = new Schema({
  'name': String,
  'category': String,
  'downloadDevice': String,
  'downloadMarcomm': String,
  'order': Number,
  'thumbnail' : String
});

var categorySchema = new Schema({
  'name': String,
  'order': String,
  'type' : String
});

var iconSchema = new Schema({
  'name': String,
  'category': String,
  'download': String,
  'order': Number,
  'thumbnail' : String
});

var font = mongoose.model('font', fontSchema);
var icon = mongoose.model('icon', iconSchema);
var category = mongoose.model('category', categorySchema);
var user = mongoose.model('user', userSchema);

module.exports = {
  'font' : font,
  'icon' : icon,
  'category' : category,
  'user': user
};
