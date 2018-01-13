var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medstoreSchema = new Schema({
    bmi: {
    type: String,
    trim: true,
    required: "bmi"
  },
  Height: {
  	type: Height,
  	trim: true,
    required: "Height"
  },
  Weight: {
  	type: String,
  	required: true,
  	required: "Weight"
  },

});

var medstore = mongoose.model('medstore', medstoreSchema);

module.exports = medstore;

