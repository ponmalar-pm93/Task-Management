const { STRING } = require("sequelize");
const Task = require("../sequelize");
const { User } = require("sequelize");
module.exports = (sequelize,type) => {
  const Task = sequelize .define('task', {
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
    user_id:
    {
      type: type.INTEGER,
      //primaryKey:true,
    },
    // assigned_to: {
    //   type: type.STRING,
    //   allowNull: true,
    // },
    status: {
      type: type.ENUM("ToDo", "In Progress", "Completed", "Close"),
      defaultValue: 'ToDo',
      allowNull: false,
      validate: {
        len: [0, 20] // set the minimum and maximum length for the column
      }
    },

  });
//Task.belongsTo(User);
//Task.belongsTo(User, {foreignKey: 'userId'});


//Task.belongsTo(User, {primaryKey: 'local_user_id', targetKey: 'id'});

  return Task;
};
