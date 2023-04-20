const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TaskModel = require('./models/task');
const CommentModel =require('./models/commentModel');
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
//const Comment = CommentModel(sequelize,Sequelize);

sequelize.sync().then(() => {
  console.log(`Users db and user table have been created`);
  console.log('Task db and Task table created')
});

//one to many relation//
//Task.belongsTo(User, { foreignKey: 'assigneeId' });
// User.hasMany(Task,{
//   foreignKey:'user_id',
//   as: 'task'
// })
// Task.belongsTo(User,{
//   foreignKey: 'user_id',
//   as: 'users'
// })
module.exports = {User,Task};
//module.exports = Project;

