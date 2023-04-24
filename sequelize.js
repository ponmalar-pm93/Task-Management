const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TaskModel = require('./models/task');
const CommentModel =require('./models/comment');
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

sequelize.sync().then(() => {
  console.log(`Users db and user table have been created`);
  console.log('Task db and Task table created')
  console.log('Comment db and Comment table created')
});
//User.hasMany(Comment, { foreignKey: 'userId' });
//Comment.belongsTo(User, { foreignKey: 'userId' });




module.exports = {User,Task,Comment};
//module.exports = Project;

