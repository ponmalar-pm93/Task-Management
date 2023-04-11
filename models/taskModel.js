// const mysql = require("mysql");
// const autoIncrement = require("mongoose-sequence")(mongoose);

// const taskSchema = new mongoose.Schema({

module.exports = (sequelize) => {
    return sequelize.define('taskModel', {
  title: {
    type: String,
    minLength: [4, "Must have min 4 characters"],
    maxLength: [64, "Max characters exceeded"]
  },
  description: {
    type: String,
    maxLength: [1024, "Max characters exceeded"]
  },
  project: { 
    type: String,
    ref: "Project"  
  },
  assignee:{
    type:taskModel.belongsTo.User,  as: 'assignee', foreignKey: 'assigneeId' ,
    ref: "User"
  },
  reporter:{
    type:ObjectId,
    ref: "User"
  },
  dueDate: {
    type: Date
  },
  assignedDate: {
    type: Date
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  },
  date: {
    type: Date,
    default: Date.now
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Highest"],
    default: "Medium"
  },
  status: {
    type: String,
    enum: ["ToDo", "In Progress", "Complete", "Close"],
    default: "ToDo"
  },
  _id: {
    type: Number
  }
},{ _id: false});

taskModel.plugin(autoIncrement);
}

//module.exports = mongoose.model("Task", taskSchema);
