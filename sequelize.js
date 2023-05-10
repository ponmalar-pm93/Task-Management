const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TaskModel = require('./models/task');
const CommentModel = require('./models/comment');
const FileModel = require('./models/file');



//const sequelize = new Sequelize('dbname, 'username', 'pwd', {
  const sequelize = new Sequelize('taskmanagement','root','root',{
  host:'localhost',
  dialect: 'mysql',
  insecureAuth: true,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const User= UserModel(sequelize, Sequelize);
const Task= TaskModel(sequelize,Sequelize);
const Comment = CommentModel(sequelize,Sequelize);
const File = FileModel(sequelize,Sequelize);




sequelize.sync().then(() => {
  console.log(` user table have been created`);
  console.log(' Task table created')
  console.log(' Comment table created')
  console.log('file table created')
});




module.exports = {User,Task,Comment,File };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
//module.exports = Project;

