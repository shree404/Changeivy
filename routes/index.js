var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", function (req, res, next) {
  res.render("home", {});
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/signUp", function (req, res, next) {
  res.render("signUp");
});

router.get("/about", function (req, res, next) {
  res.render("about");
});

router.get("/help", function (req, res, next) {
  res.render("help");
});

router.get("/contactUs", function (req, res, next) {
  res.render("contactUs");
});

module.exports = router;
