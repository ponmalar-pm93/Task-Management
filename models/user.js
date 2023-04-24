//const project = require("./task");

const { Model } = require("sequelize");

module.exports = (sequelize, type) => {
    //return sequelize.define('user', {//call user model
    const User = sequelize.define('user',{
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: type.STRING,
      last_name: type.STRING,
      email: type.STRING,
      username: {
        type: type.STRING,
        allowNull: false,
      },
      password: {
        type: type.STRING,
        allowNull: false,
      },

      

    //    role:
    //    {
    //      type:type.STRING,
    //      //enum:["Admin", "Growth Leader", "User"],
    //      //default:User,
    //    }
     });
     User.associate = models =>
     {
      User.hasMany(models.CommentModel,
        {
          foreignKey: 'user_id'
        });
     }
     return User;
    }    
    