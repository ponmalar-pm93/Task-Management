//const project = require("./task");

const { User } = require("sequelize");
const {Task} = require('sequelize');

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
      
           
       role: {
         type: type.ENUM("user","admin"),
         defaultValue: 'user',
         allowNull: false,
       }
      
      
      
     } )
    
    //User.hasMany(TaskModel)  ;
   // User.hasMany(Task);
    //User.hasMany(Task,{as: 'tasks', foreignKey: 'userId'})
    //User.hasMany(Task, {primaryKey: 'id', targetKey: 'local_user_id'});
    return User;
};
    
     
    