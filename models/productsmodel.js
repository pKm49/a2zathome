var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: {type: String, required: true},
    code: {type: String, required: true},
    description:{type:String, required:true},
    details: [],
    size: [],
    imageurl: [],
    imageone: {type: String, required: true},
    imagetwo: {type: String, required: true},
    imagethree: {type: String, required: true},
    maincategory:{type: String, required: true},
    subCategory:{type: String, required: true},
    type:{type: String, required: true},
    oldPrice:[],
    newPrice:{type: Number, required: true},
    a2zPrice:{type: Number, required: true},
    rating:{type: Number, required: true},
    ratecount:{type: Number, required: true},
    cod:{type:Boolean, required:true},
    source:{type:String, required:true},
    affiliatelink:{type:String, required:true},
    sellerId:{type: String, required: true},
    availability:{type:Boolean, required:true},
    approved:{type:Boolean, required:true}
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});        
module.exports = mongoose.model('products', productSchema);
