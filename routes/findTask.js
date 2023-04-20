const {Task} = require('../sequelize')

module.exports = app => {
  app.get('/findTask', (req, res) => {
    const title = req.query.title;
    if (title) {
      Task.findOne({
        where: {
          title:title,
        },
      })
        .then(task => {
          if (task!= null) {
            console.log('task found in db');
            res.status(200).send({
              title: task.title,
              description: task.description,
              message: 'task found in db',
            });
          } else {
            console.log('task not found in db');
            res.status(404).send({
              auth: false,
              message: 'no task with that title',
            });
          }
        })
        .catch(err => {
          console.log('problem communicating with db');
          res.status(500).json(err);
        });
    } else {
      return res.status(400).send({
        auth: false,
        message: 'missing or empty task title',
      });
    }
  });
};



