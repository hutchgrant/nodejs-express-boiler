var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var User = require('../models/user');
var Auth = require('./auth');


router.get('/', Auth.isAdmin, function(req, res, next) {
  res.render('admin/index', { title: 'Admin' });
});

module.exports = router;