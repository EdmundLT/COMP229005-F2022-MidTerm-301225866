// COMP229 | SEC005 | Midterm
// Student Name: Long Tang
// Student ID: 301225866
// Date: 23 October 2022
// Import
let mongoose = require("mongoose");

// Create a model class
let todoModel = mongoose.Schema(
  {
    task: String,
    description: String,
    complete: { type: Boolean, default: false },
  },
  {
    collection: "todo",
  }
);

module.exports = mongoose.model("Todo", todoModel);
