const {Project} = require('../sequelize');
module.exports = app => {
    
          // Update project by title
          app.put('/updateTask', async (req, res) => {
            const { title, description } = req.body;
        
            if (!title || !description) {
              return res.status(400).send({ message: 'Title and description are required' });
            }
        
            try {
              const project = await Project.findOne({ where: { title } });
        
              if (!project) {
                return res.status(404).send({ message: 'Project not found' });
              }
        
              await Project.update({ description }, { where: { title } });
        
              console.log('project updated in db');
              res.status(200).send({ message: 'project updated' });
            } catch (error) {
              console.error(error);
              res.status(500).send({ message: 'Error updating project' });
            }
          });
        };
        

    