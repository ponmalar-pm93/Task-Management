const { Notification } = require('../sequelize');
const { User } = require('../sequelize');
const { Task } = require('../sequelize');

module.exports = app => {
  app.post('/notification', (req, res) => {
    const { _id, user_id } = req.body;

    Task.findByPk(_id)
      .then(task => {
        if (!task) {
          throw new Error(`Task with ID ${_id} not found`);
        }

        return task.assignToUser(user_id);
      })
      .then(notification => {
        console.log('Notification created in database:', notification);
        res.status(200).send({ message: 'Task assigned to user' });
      })
      .catch(error => {
        console.error('Error assigning task to user:', error);
        res.status(500).send({ error: error.message });
      });
  });
};

Task.prototype.assignToUser = function(user_id) {
  const task = this;

  return User.findByPk(user_id).then(user => {
    if (!user) {
      throw new Error(`User with ID ${user_id} not found`);
    }

    return Notification.create({
      message: `You have been assigned a new task: ${task.title}`,
      _id: task._id,
      user_id: user_id
    });
  });
};






// const {Notification} = require('./Notification');
// const {User} = require('../sequelize');
// const {Task} = require('../sequelize');

// module.exports = app => {
//     app.get('/notification', (req,res) => {

// Task.prototype.assignToUser = function(userId) {
//   const task = this;
  
//   return User.findByPk(userId).then(user => {
//     if (!user) {
//       throw new Error(`User with ID ${userId} not found`);
//     }
    
//     return Notification.create({
//       message: `You have been assigned a new task: ${task.title}`,
//       task_id: task.id,
//       user_id: userId
//     });
//   });
// };
//     })
// }