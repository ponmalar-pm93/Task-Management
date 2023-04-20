const { Task} = require("../sequelize")
const {User} = require('../sequelize');
module.exports = app => {
     
app.get('/userTask', async(req, res) => {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({error: "Please provide a valid id"});
    }
    const data = await User.findOne({
      include:Task ,
      where: { id: id }
    });
    res.status(200).send(data);
  });
}  





  // //const getUserTask = async (req,res) => 
  // {
  //     const id = req.params._id
  //     const data = await User.findOne({
  //         include: [{
  //             model: Project,
  //             as: 'projects'
  //         }],
  //         where: { id: id}
  //     })
  // res.status(200).send(data)
  // }
  //     })
  // }