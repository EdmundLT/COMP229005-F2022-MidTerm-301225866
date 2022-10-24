// COMP229 | SEC005 | Midterm
// Student Name: Long Tang
// Student ID: 301225866
// Date: 23 October 2022


// create a reference to the model
let TodoModel = require("../models/todo");

// Gets all todo from the Database and renders the page to list them all.
module.exports.todoList = function (req, res, next) {
  TodoModel.find((err, todoList) => {
    //console.log(todoList);
    if (err) {
      return console.error(err);
    } else {
      res.render("todo/list", {
        title: "To-Do List",
        TodoList: todoList,
        userName: req.user ? req.user.username : "",
      });
    }
  });
};

// Gets a todo by id and renders the details page.
module.exports.details = (req, res, next) => {
  let id = req.params.id;

  TodoModel.findById(id, (err, todoToShow) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("todo/details", {
        title: "To-Do Details",
        todo: todoToShow,
      });
    }
  });
};

// Gets a todo by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = async (req, res, next) => {
  const id = req.params.id;
  const todoNeedEdit = await TodoModel.findById(id);
  console.log({ todoNeedEdit });
  res.render("todo/add_edit", { todo: todoNeedEdit, title: todoNeedEdit.task });
};

// Processes the data submitted from the Edit form to update a todo
module.exports.processEditPage = async (req, res, next) => {
  let id = req.params.id;

  let updatedTodo = TodoModel({
    _id: req.body.id,
    task: req.body.task,
    description: req.body.description,
    complete: req.body.complete ? true : false,
  });
  await TodoModel.findByIdAndUpdate(id, updatedTodo);
  res.redirect("/todo/list");
};

// Deletes a todo based on its id.
module.exports.performDelete = async (req, res, next) => {
  const _id = req.params.id;
  const result = await TodoModel.findByIdAndDelete(_id);
  console.log({ result });
  res.redirect("/todo/list");
};

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
  const todo = TodoModel();
  res.render("todo/add_edit", {
    todo,
    title: null,
    userName: req.user ? req.user.username : "",
  });
};

// Processes the data submitted from the Add form to create a new todo
module.exports.processAddPage = async (req, res, next) => {
  let newTodo = TodoModel({
    _id: req.body.id,
    task: req.body.task,
    description: req.body.description,
    complete: req.body.complete ? true : false,
  });
  console.log(newTodo);
  await TodoModel.create(newTodo);
  res.redirect("/todo/list");
};
