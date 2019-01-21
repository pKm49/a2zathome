var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {type: String, required: true},
    subcategory: [{type:String}]
});        
module.exports = mongoose.model('categories', categorySchema);
