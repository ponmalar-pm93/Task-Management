const {Project} = require('../sequelize');

module.exports = app => {
  app.get('/allTask', (req, res) => {
    Project.findAll()
    .then(project => {
        res.status(200).json(project);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Error retrieving projects from database' });
      });
  });
};
