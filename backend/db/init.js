var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost');

var mongoose_db = mongoose.connection;
mongoose_db.on('error', console.error);
mongoose_db.once('open', function() {
  console.log("Connected to mongd server");

    autoIncrement.initialize(mongoose.connection);

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
        'category': String,
        'order': Number,
        'type' : String
    });
    
    var iconSchema = new Schema({
        'name': String,
        'category': String,
        'downloadPng': String,
        'downloadSvg': String,
        'order': Number
    });
    
    var font = mongoose.model('font', fontSchema);
    var icon = mongoose.model('icon', iconSchema);
    var category = mongoose.model('category', categorySchema);

    font.remove({}).exec(function(err) {
    console.log(err);
    });

    icon.remove({}).exec(function(err) {
        console.log(err);
    });

    category.remove({}).exec(function(err) {
    console.log(err);
    });

    var categoryData = require("./category.json");
    var fontsData = require("./fonts.json");
    var iconsData = require("./icons.json");

    categoryData.forEach(function(data){
        // console.log(data);
        var c = new category(data);
        c.save(function(err,docs){
            console.log(docs);
        })
    });

    fontsData.forEach(function(data){
        console.log(data);
        var c = new font(data);
        c.save(function(err){
            // console.log(err);
        })
    });

    iconsData.forEach(function(data){
        // var c = new icon(data);
        var c = new icon(data);
        c.save(function(err,docs){
            console.log(docs);
        })
    });
});
