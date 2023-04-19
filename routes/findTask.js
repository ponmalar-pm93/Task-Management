const {Project} = require('../sequelize')

module.exports = app => {
  app.get('/findTask', (req, res) => {
    const title = req.query.title;

    if (title) {
      Project.findOne({
        where: {
          title:title,
        },
      })
        .then(project => {
          if (project!= null) {
            console.log('project found in db');
            res.status(200).send({
              title: project.title,
              description: project.description,
              message: 'project found in db',
            });
          } else {
            console.log('project not found in db');
            res.status(404).send({
              auth: false,
              message: 'no project with that title',
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
        message: 'missing or empty project title',
      });
    }
  });
};



