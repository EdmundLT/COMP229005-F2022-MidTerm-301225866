// COMP229 | SEC005 | Midterm
// Student Name: Long Tang
// Student ID: 301225866
// Date: 23 October 2022

let express = require("express");
let router = express.Router();
let usersController = require("../controllers/user");

// Routes for sign-up
router.get("/signup", usersController.renderSignup);
router.post("/signup", usersController.signup);

// Routes for sign-in
router.get("/signin", usersController.renderSignin);
router.post("/signin", usersController.signin);

// Route for sign-out
router.get("/signout", usersController.signout);

module.exports = router;
