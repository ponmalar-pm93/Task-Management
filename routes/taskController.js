const Sequelize= require("sequelize");
const taskModel = require("../models/taskModel");
const project = require("../models/project");
const commentModel = require("../models/commentModel");
//const ObjectId = require("mongodb").ObjectId;
const User = require("../models/user");

// const AutoIncrement = require("mongoose-sequence")("mongoose");
// const id = taskSchema.plugin(AutoIncrement);

async function createTask(req, res) {

  givenProject = await project.findOne({
    _id: req.body.project.toUpperCase()
  });

  if (!givenProject) {
    error = {
      "message": "Given project is doesn't exist.",
    }
    res.send(error);
    return
  }

  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    project: givenProject._id,
    priority: req.body.priority,
  });

  newTask.save(function (err) {
    if (!err) {

      res.send(newTask);

    } else {
      console.log(err);
      error = {
        "message": "Error in create task.",
        "trace": err
      }
      res.send(error);
    }
  });
};

async function getAllTask(req, res) {

  const list = await Task.find({});
  res.send(list);

};

async function getByTaskId(req, res) {
  const taskId = req.params.taskId;
  // const good_id = new ObjectId(taskId);
  const foundTask = await Task.find({
    _id: taskId
  });

  if (foundTask == {}) {
    error = {
      "message": "Error in get by task id",
    }
    res.send(error);
  } else {
    res.send(foundTask);
  }

};

async function patchByTaskId(req, res) {
  const taskId = req.params.taskId;
  // const good_id = new ObjectId(taskId);
  const new_title = req.body.title;
  const new_description = req.body.description;
  const newTask = await Task.findOneAndUpdate({
    _id: taskId
  }, {
    title: new_title,
    description: new_description
  });

  if (newTask == {}) {
    error = {
      "message": "Error in update task",
    }
    res.send(error);

  } else {
    res.send(newTask);
  }
};

async function deleteByTaskId(req, res) {
  const taskId = req.params.taskId;
  // const good_id = new ObjectId(taskId);
  const result = await Task.findOneAndDelete({
    _id: taskId
  });
  if (result == {}) {
    error = {
      "message": "Error in delete task",
    }
    res.send(error);
  } else {
    res.send("Successfully Deleted.");
  }
};

async function assignTask(req, res) {
  const taskId = req.params.taskId;
  const userName = req.body.userName;
  const user = await User.findOne({
    userName: userName
  });
  console.log(user);
  const person = user.userName;
  console.log(person);
  // const good_id = new ObjectId(taskId);
  const foundTask = await Task.findOneAndUpdate({
    _id: taskId
  }, {
    assignee: user
  });
  if (foundTask == {}) {
    error = {
      "message": "Error in assign task",
    }
    res.send(error);

  } else {
    res.send(foundTask);
  }
};

async function changeStatus(req, res) {
  const taskId = req.params.taskId;
  const resultStatus = req.body.status;
  const foundTask = await Task.findOne({
    _id: taskId
  });
  console.log(foundTask.status);
  if (foundTask.status == "ToDo" && resultStatus == "In Progress") {

    Task.updateOne({
      status: resultStatus
    }, function (err, updatedTask) {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedTask);
      }
    });


  } else if (foundTask == "In Progress" && resultStatus == "ToDo" || "Completed") {

    Task.updateOne({
      status: resultStatus
    }, function (err, updatedTask) {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedTask);
      }
    });
  } else if (foundTask == "Completed" && resultStatus == "In Progress" || "Closed") {

    Task.updateOne({
      status: resultStatus
    }, function (err, updatedTask) {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedTask);
      }
    });

  } else if (foundTask == "Closed" && resultStatus == "ToDo") {

    Task.updateOne({
      status: resultStatus
    }, function (err, updatedTask) {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedTask);
      }
    });
  } else {
    error = {
      "message": "Error in change status",
    }
    res.send(error);
  }
};

async function createComment(req, res) {
  givenTask = await Task.findOne({
    _id: req.params.taskId
  });
  if (!givenTask) {
    error = {
      "message": "Given project is doesn't exist.",
    }
    res.send(error);
    return
  }
  const newComment = new Comment({
    description: req.body.description,
    commentedBy: req.body.userName
  });
  newComment.save(function (err) {
    if (!err) {

      res.send(newComment);

    } else {
      console.log(err);
      error = {
        "message": "Error in create comment.",
        "trace": err
      }
      res.send(error);
    }
  });
}

module.exports = app =>{
  createTask,
  getAllTask,
  getByTaskId,
  patchByTaskId,
  deleteByTaskId,
  assignTask,
  changeStatus,
  createComment
};