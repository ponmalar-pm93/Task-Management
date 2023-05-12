const { User } = require("sequelize");
const {Task} = require('sequelize');
const {Notification} = require('sequelize');
module.exports = (sequelize, type) => {
    //return sequelize.define('user', {//call user model
    const Notification = sequelize.define('notification',{
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    
      user_id:
      {
        type: type.INTEGER,

      },
      _id: {
        type:type.INTEGER,
      }

    })
    return Notification;
}