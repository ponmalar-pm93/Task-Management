//const project = require('../models/project');
//const Project = require('../sequelize');
const ProjectModel =require('../sequelize')

// create project
module.exports = app => {
app.post('/createProject' ,  (req, res) => {
    console.log(req.body);

    const newProject = new ProjectModel({
      _id: req.body.short_name.toUpperCase(),
      title: req.body.title,
      description: req.body.description,
      short_name: req.body.short_name.toUpperCase()
    });
    newProject.validate(function (value) {
      if (value) {
        error = {
          "message": "Error in short name. Must have 3 characters.",
          "trace": value
        }
        res.send(error);
      } else {
        newProject.save(function (err) {
          if (err) {
            console.log(err)
            // TODO change this -
            err = {
              "message": "Short name already exists. It should be unique.",
              "trace": err
            }
            res.send(err);   
  
          } else {
            // TODO change this -
            res.send(newProject);
          }
  
        });
      }
    });
  
  
  
  })
  
} 



    //     const info = {
//         title: req.body.title,
//         description: req.body.description,
//         short_name: req.body.short_name ? req.body.short_name : false,
//       };
//   // validate request
//   if (!req.body.title) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//     return;
//   }
//   // save Project in the database
//   try {
//     const project = await ProjectModel.create(info);
//     res.status(200).send(project);
//     console.log(project);
//   } catch (err) {
//     res.status(500).send({
//       message: err.message || "Error occurred while creating the Project",
//     });
//   }
// });
// }