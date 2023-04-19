const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const ProjectModel = require('./models/project');
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
const Project= ProjectModel(sequelize,Sequelize);
//const Comment = CommentModel(sequelize,Sequelize);

sequelize.sync().then(() => {
  console.log(`Users db and user table have been created`);
  console.log('project db and project table created')
});

module.exports = {User,Project};
//module.exports = Project;

