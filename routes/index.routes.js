const express = require('express');
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/private", isLoggedIn, (req, res, next) => {
  res.render("auth/private");
});




module.exports = router;
