const {Task} = require('../sequelize');
module.exports = app => {
app.post('/assignTask', async (req, res) => {
    const { title, description,user_id } = req.body;
  
    const task = await Task.create({
      title,
      description,
      status: 'New',
      user_id, // Assign the task to the current user
    });
  
    res.json(task);
  });
}