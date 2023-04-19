const ProjectModel = require('../sequelize');

module.exports = app => {
  app.delete('/deleteTask', (req, res) => {
    const title = req.query.title;

    if (title) {
      ProjectModel.findOne({
        where: {
          title: title,
        },
      })
        .then(project => {
          if (project != null) {
            ProjectModel.destroy({
              where: {
                title: title,
              },
            })
              .then(() => {
                console.log('project deleted from db');
                res.status(200).send({ message: 'project deleted' });
              });
          } else {
            console.log('project not found in db');
            res.status(404).json('no project with that title to delete');
          }
        });
    } else {
      res.status(400).send({ message: 'title query parameter required' });
    }
  });
};






