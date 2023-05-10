const { Task } = require('../sequelize');
const { User } = require('../sequelize');

module.exports = app => {
  app.post('/assignTask', async (req, res) => {
    const task_id = req.params.task_id;
    const userName = req.body.userName;
    const user = await User.findOne({
      userName: userName
    });
    console.log(user);
    const person = user.userName;
    console.log(person);
try{
    const [rowsUpdated, [updatedTask]] = await Task.update(
      { assigned_to: person },
      { where: { _id: task_id }, returning: true }
    );
    console.log(rowsUpdated, updatedTask);
  } catch (err) {
    console.error(err);
  }
    // if (rowsUpdated === 0) {
    //   const error = {
    //     "message": "Error in assign task",
    //   }
    //   res.send(error);
    // } else {
    //   res.send(updatedTask);
    // }
  });
}


//     const { title, description,user_id } = req.body;
  
//     const task = await Task.create({
//       title,
//       description,
//       user_id
      
//       // Assign the task to the current user
//     });
//   console.log("assign task:",task);
//     res.json(task);
//   });
// }