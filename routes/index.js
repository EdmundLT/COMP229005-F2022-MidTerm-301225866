// COMP229 | SEC005 | Midterm
// Student Name: Long Tang
// Student ID: 301225866
// Date: 23 October 2022
var express = require("express");
var router = express.Router();
let controlerIndex = require("../controllers/index");

/* GET home page. */
router.get("/", controlerIndex.home);

module.exports = router;
