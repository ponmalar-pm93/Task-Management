const { STRING } = require("sequelize");
const Task = require("../sequelize");

module.exports = (sequelize,type) => {
  const TaskModel = sequelize.define('task', {
    _id: {
      type:type.INTEGER,
      primaryKey: true,
      autoIncrement: true,   
    },
    title: {
      type:type.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 64],
          msg: "Must have min 4 characters and max 64 characters"
        }
      }
    },
    description: {
      type: type.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 1024],
          msg: "Max characters exceeded"
        }
      }
    },
    
  });

  

  
  return TaskModel;
};
