const {Task} = require('../sequelize');

module.exports = app => {
  app.get('/allTask', (req, res) => {
    Task.findAll()
    .then(task => {
        res.status(200).json(task);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Error retrieving task from database' });
      });
  });
};
