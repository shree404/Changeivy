var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.render("index", {});
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

router.get("/dashboard", function (req, res, next) {
  res.render("dashboard");
});

router.post("/submit", async function (req, res, next) {
  let forSignUp = new forSignUp({
    Username: req.body.username,
    Email: req.body.email,
    Password: req.body.password,
    ConfirmPassword: req.body.confirmpassword,
    DateOfBirth: req.body.dateofbirth,
    Country: req.body.country,
  });

  console.log(forSignUp);
  await forSignUp.insertMany(expenses);
  res.redirect("/dashboard", { forSignUp });
});

router.get("/goal", function (req, res, next) {
  res.render("goal");
});

router.get("/task", function (req, res, next) {
  res.render("task");
});
module.exports = router;
