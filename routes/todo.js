// COMP229 | SEC005 | Midterm
// Student Name: Long Tang
// Student ID: 301225866
// Date: 23 October 2022

var express = require("express");
var router = express.Router();

let todoController = require("../controllers/todo");

// Helper function for guard purposes
function requireAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/users/signin");
}

/* GET list of items */
router.get("/list", requireAuth, todoController.todoList);

// Route for Details
router.get("/details/:id", requireAuth, todoController.details);

// Routers for edit
router.get("/edit/:id", requireAuth, todoController.displayEditPage);
router.post("/edit/:id", requireAuth, todoController.processEditPage);

// Delete
router.get("/delete/:id", requireAuth, todoController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, todoController.displayAddPage); //fixed

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, todoController.processAddPage); //fixed

module.exports = router;
