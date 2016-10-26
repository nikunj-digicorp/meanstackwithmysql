var express = require('express');
var controller = require('./user.controller');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy
var router = express.Router();
module.exports = router;

router.post('/user-signup', controller.signup);
router.post('/user-signin', passport.authenticate('local'),function(req, res) { console.log(res); res.redirect('/'); });