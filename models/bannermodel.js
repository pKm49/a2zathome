var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerSchema = new Schema({
    imagePath: {type: String, required: true},
    sectionnumber: {type: Number, required: true},
});

module.exports = mongoose.model('banners', bannerSchema);