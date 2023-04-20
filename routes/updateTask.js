const {Task} = require('../sequelize');
module.exports = app => {
    
          // Update project by title
          app.put('/updateTask', async (req, res) => {
            const { title, description } = req.body;
        
            if (!title || !description) {
              return res.status(400).send({ message: 'Title and description are required' });
            }
        
            try {
              const task = await Task.findOne({ where: { title } });
        
              if (!task) {
                return res.status(404).send({ message: 'Task not found' });
              }
        
              await Task.update({ description }, { where: { title } });
        
              console.log('task updated in db');
              res.status(200).send({ message: 'task updated' });
            } catch (error) {
              console.error(error);
              res.status(500).send({ message: 'Error updating task' });
            }
          });
        };
        

    