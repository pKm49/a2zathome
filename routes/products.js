var express = require('express');
var router = express.Router();
var passport = require('passport');
var csurf = require('csurf');
var Product = require('../models/productsmodel');
var categories = require('../models/categorymodel');
var async = require('async');

var csrProtection = csurf();
router.use(csrProtection);

function productgetter(req, res, next){
    let rsp = {};
    let product;
    let cat;
    const tasks = [
        function getcategories(cb) {
            categories.find(function (err, data) {
              if (err) {
                return cb(err);
              }
              cat = data;
              return cb(null, data);
            });
          },
        function getProduct(cb) {
            var productId = req.params.productId;
        
            Product.find({_id:productId},function (err, data) {
              if (err) {
                return err;
              }else{
                product = data;
                return cb(null, data);
              }
            });
        
            
          }
    ];
    async.series(tasks, (err, results) => {
        if (err) {
          return err;
        }
        return res.render('../views/products/product', {title: 'A2ZOnlineShoppy',product:product, categories:cat});

      })

}

function productbycatgetter(req, res, next){
    let rsp = {};
    let product;
    let cat;
    const tasks = [
        function getcategories(cb) {
            categories.find(function (err, data) {
              if (err) {
                return cb(err);
              }
              cat = data;
              return cb(null, data);
            });
          },
        function getProduct(cb) {
            var category = req.params.category;
        
            Product.find({maincategory:category},function (err, data) {
              if (err) {
                return err;
              }else{
                products = data;
                return cb(null, data);
              }
            });
        
            
          }
    ];
    async.series(tasks, (err, results) => {
        if (err) {
          return err;
        }
        return res.render('../views/products/products', {title: 'A2ZOnlineShoppy',products:products, categories:cat});

      })

}

function productbysubgetter(req, res, next){
    let rsp = {};
    let product;
    let cat;
    const tasks = [
        function getcategories(cb) {
            categories.find(function (err, data) {
              if (err) {
                return cb(err);
              }
              cat = data;
              return cb(null, data);
            });
          },
        function getProduct(cb) {
            var subcategory = req.params.subcategory;
        
            Product.find({subCategory:subcategory},function (err, data) {
              if (err) {
                return err;
              }else{
                products = data;
                return cb(null, data);
              }
            });
        
            
          }
    ];
    async.series(tasks, (err, results) => {
        if (err) {
          return err;
        }
        return res.render('../views/products/products', {title: 'A2ZOnlineShoppy',products:products, categories:cat});

      })

}
  

router.get('/getproduct/:productId', notLoggedIn,function(req, res, next) {
    productgetter(req, res, next);
  });
  
  router.get('/getproductscat/:category', notLoggedIn,function(req, res, next) {
    productbycatgetter(req, res, next);
  });

  router.get('/getproductssub/:subcategory', notLoggedIn,function(req, res, next) {
    productbysubgetter(req, res, next);
  });
  

module.exports = router;
  

function isLoggedIn(req, res, next){
      if(req.isAuthenticated()){
          return next();
      }
      res.redirect('/');
  }


function notLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        res.redirect('/');
    }else{
        return next();
    }
}