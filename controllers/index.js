// COMP229 | SEC005 | Midterm
// Student Name: Long Tang
// Student ID: 301225866
// Date: 23 October 2022

exports.home = function (req, res, next) {
  console.log("===> Original URL: " + req.session.url);
  res.render("index", {
    title: "Home",
    userName: req.user ? req.user.username : "",
  });
};
