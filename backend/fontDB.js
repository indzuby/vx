var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost');

var mongoose_db = mongoose.connection;
mongoose_db.on('error', console.error);
mongoose_db.once('open', function() {
  console.log("Connected to mongd server");
});

autoIncrement.initialize(mongoose.connection);

var fontCategorySchema = new Schema({
    'orderNumber': Number,
    'name': String,
    'fonts' : [{
        'orderNumber': Number,
        'name': String,
        'fontCategory' : Number,
        'downloadDevice': String,
        'downloadMarcomm': String,
        'thumbnail' : String
    }]
})

fontCategorySchema.plugin(autoIncrement.plugin, {
  'model': 'fontCategory',
  'field': 'orderNumber',
  'startAt': 1
});

var fontCategory = mongoose.model('fontCategory', fontCategorySchema);

fontCategory.remove({}).exec(function(err) {
  console.log(err);
  fontCategory.resetCount(function() {
  });
});
