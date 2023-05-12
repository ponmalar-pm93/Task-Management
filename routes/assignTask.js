const { Task } = require('../sequelize');
const { User } = require('../sequelize');

module.exports = app => {
  app.post('/assignTask', async (req, res) => {
    const _id = req.params._id;
    const userName = req.body.userName;
    const user = await User.findOne({
      userName: userName
    })
    console.log(user);
    const person = user.userName;
    console.log(person);

    const{ rowsUpdated, updatedTask} = await Task.update(
      { assigned_to: person },
      { where: { _id: _id }, returning: true }
    );

    if (rowsUpdated === 0) {
      const error = {
        "message": "Error in assign task",
      }
      res.send(error);
    } else {
      res.send(updatedTask);
    }
  });
}


