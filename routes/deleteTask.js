const TaskModel = require('../sequelize');

module.exports = app => {
  app.delete('/deleteTask', (req, res) => {
    const title = req.query.title;

    if (title) {
      TaskModel.findOne({
        where: {
          title: title,
        },
      })
        .then(task => {
          if (task != null) {
            TaskModel.destroy({
              where: {
                title: title,
              },
            })
              .then(() => {
                console.log('task deleted from db');
                res.status(200).send({ message: 'task deleted' });
              });
          } else {
            console.log('task not found in db');
            res.status(404).json('no task with that title to delete');
          }
        });
    } else {
      res.status(400).send({ message: 'title query parameter required' });
    }
  });
};






