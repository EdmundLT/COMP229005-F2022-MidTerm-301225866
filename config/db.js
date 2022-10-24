// COMP229 | SEC005 | Midterm
// Student Name: Long Tang
// Student ID: 301225866
// Date: 23 October 2022
// Do not expose your credentials in your code.

require("dotenv").config();
let atlasDB = process.env.ATLAS;

// Database setup
let mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(atlasDB);
  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error:"));
  mongodb.once("open", () => {
    console.log("===> Connected to MongoDB.");
  });

  return mongodb;
};
