var express = require('express');
var router = express.Router();
var Product = require('../models/productsmodel');
var categories = require('../models/categorymodel');
require('mongoose-query-random');
var async = require('async');
require('dotenv').load();
var config = require('../config/config');

var azureStorage = require('azure-storage');
var blobService = azureStorage.createBlobService();
var container1Name = 'banner1';
var container2Name = 'banner2';
var container3Name = 'banner3';
var container4Name = 'banner4';


function seriesDemo(req, res, next) {
  let rsp = {};
  let viewData={};
  let cat;
  //var random = Math.floor(Math.random() * count);

  const tasks = [
    function getmobiles(cb) {
      Product.find().where('subCategory').equals('Mobiles').gte('rating',2).random(4, true, function(err, data) {
        if (err){
          rsp.mobiles = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.mobiles = data;
        return cb(null, data);
    });
    },
    function getlaptops(cb) {
      Product.find().where('subCategory').equals('Laptops').gte('rating',2).random(4, true, function(err, data) {
        if (err){
          rsp.laptops = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.laptops = data;
        return cb(null, data);
    });
    },
    function gettablets(cb) {
      Product.find().where('subCategory').equals('Tablets').gte('rating',2).random(2, true, function(err, data) {
        if (err){
          rsp.tablets = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.tablets = data;
        return cb(null, data);
    });
    },
    function geteothers(cb) {
      Product.find({$and:[{maincategory: "Electronics",subCategory:"Others"}]}).gte('rating',2).random(2, true, function(err, data) {
        if (err){
          rsp.electronics = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.electronics = data;
        return cb(null, data);
    });
    },
    function getpcs(cb) {
      Product.find().where('subCategory').equals('Desktop PCs').gte('rating',4).random(4, true, function(err, data) {
        if (err){
          rsp.pcs = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.pcs = data;
        return cb(null, data);
    });
    },

    function getmaccessories(cb) {
      Product.find().where('subCategory').equals('Desktop PCs').gte('rating',4).random(4, true, function(err, data) {
        if (err){
          rsp.maccessories = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.maccessories = data;
        return cb(null, data);
    });
    },
    function getwaccessories(cb) {
      Product.find().where('subCategory').equals('Desktop PCs').gte('rating',4).random(4, true, function(err, data) {
        if (err){
          rsp.waccessories = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.waccessories = data;
        return cb(null, data);
    });
    },
    function getomens(cb) {
    
      Product.find().where('maincategory').equals('Women').gte('rating',2).random(8, true, function(err, data) {
        if (err){
          rsp.womens = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.womens = data;
        return cb(null, data);
    });
    },
    function getbabykids(cb) {
     
      Product.find().where('maincategory').equals('Babies and Kids').gte('rating',2).random(8, true, function(err, data) {
        if (err){
          rsp.babykids = "";
          return cb(null, err);
        }  
        console.log(data);
        rsp.babykids = data;
        return cb(null, data);
    });
    },
    function getelectronics(cb) {
      Product.find().where('maincategory').equals('Electronics').gte('rating',2).random(8, true, function(err, data) {
        if (err){
          rsp.electronics = "";
          return cb(null, err);
        }  
        console.log(data);
        rsp.electronics = data;
        return cb(null, data);
    });
    },
    function gethomenfurniture(cb) {
      

      Product.find().where('maincategory').equals('Home and Furniture').gte('rating',2).random(8, true, function(err, data) {
        if (err){
          rsp.homenfurnitures = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.homenfurnitures = data;
        return cb(null, data);
    });
    },
    function getappliances(cb) {
      Product.find().where('maincategory').equals('Appliances').gte('rating',2).random(8,true,function(err, data){
        if (err){
          rsp.appliances = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.appliances = data;
        return cb(null, data);
      });
      
    },
    function getmore(cb) {
      Product.find().where('maincategory').equals('Others').gte('rating',2).random(8, true, function(err, data) {
        if (err){
          rsp.more = "";
          return cb(null, err);
        } 
        console.log(data);
        rsp.more = data;
        return cb(null, data);
    });
      
    },
    function getbanner1(cb) {
      blobService.listBlobsSegmented(container1Name, null, (err, data) => {
        if (err) {
          return cb(err);
        } 
          viewData.banner1 = {
            accountName: config.getStorageAccountName(),
            containerName: container1Name
          };
    
          if (data.entries.length) {
            viewData.banner1.thumbnails = data.entries;
          }

          return cb(null, data);
      });
    },
    function getbanner2(cb) {
      blobService.listBlobsSegmented(container2Name, null, (err, data) => {
        if (err) {
          return cb(err);
        } 
          viewData.banner2 = {
            accountName: config.getStorageAccountName(),
            containerName: container2Name
          };
    
          if (data.entries.length) {
            viewData.banner2.thumbnails = data.entries;
          }

          return cb(null, data);
      });
    },
    function getbanner3(cb) {
      blobService.listBlobsSegmented(container3Name, null, (err, data) => {
        if (err) {
          return cb(err);
        } 
          viewData.banner3 = {
            accountName: config.getStorageAccountName(),
            containerName: container3Name
          };
    
          if (data.entries.length) {
            viewData.banner3.thumbnails = data.entries;
          }

          return cb(null, data);
      });
    },
    function getbanner4(cb) {
      blobService.listBlobsSegmented(container4Name, null, (err, data) => {
        if (err) {
          return cb(err);
        } 
          viewData.banner4 = {
            accountName: config.getStorageAccountName(),
            containerName: container4Name
          };
    
          if (data.entries.length) {
            viewData.banner4.thumbnails = data.entries;
          }

          return cb(null, data);
      });
    }
    
  ];
  async.series(tasks, (err, results) => {
    if (err) {
      return err;
    }
    return res.render('../views/customers/index', { title: 'A2ZOnlineShoppy', products: rsp,banners:viewData});
  })
}




/* GET home page. */
router.get('/', function (req, res, next) {
  seriesDemo(req, res, next);
});


module.exports = router;