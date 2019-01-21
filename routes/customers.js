var express = require('express');
var router = express.Router();
var passport = require('passport');
var csurf = require('csurf');

var csrProtection = csurf();
router.use(csrProtection);


router.get('/singout', isLoggedIn, function(req, res, next) {
    req.logOut();
    res.redirect('/');
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('../views/customers/profile', { csrfTokken: req.csrfToken() });
});

router.get('/signup',notLoggedIn, function(req, res, next) {
    var messages = req.flash('error');
    res.render('../views/customers/signup', { csrfTokken: req.csrfToken(),messages:messages, hasErrors: messages.length >0 });
  });
  
  
  router.get('/signin', notLoggedIn,function(req, res, next) {
    var messages = req.flash('error');
    res.render('../views/customers/login', { csrfTokken: req.csrfToken(),messages:messages, hasErrors: messages.length >0 });
  });
  
  
  router.post('/signup', notLoggedIn,passport.authenticate('local.signup',{
    successRedirect: '/customer/profile',
    failureRedirect: '/customer/signup',
    failureFlash:true
  }));
  
  router.post('/signin', notLoggedIn,passport.authenticate('local.signin',{
    successRedirect: '/customer/profile',
    failureRedirect: '/customer/signin',
    failureFlash:true
  }));

  
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