const express = require('express');
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/private", isLoggedIn, (req, res, next) => {
  let user = req.session.currentUser
  res.render("auth/private", user);

});


module.exports = router;
