//const project = require('../models/project');
//const Project = require('../sequelize');
const {Project} =require('../sequelize')

// create project
module.exports = app => {
app.post('/createTask' ,  (req, res) => {
  
    const data = {
      title: req.body.title,
      description: req.body.description,
      
      
    };
    if (data.description === '' || data.title === '') {
      res.json('title and description required');
    }
    Project.findOne({
      where: {
        title: data.title,
      },
    })
      .then(project => {
        if (project != null) {
          console.log('title already taken');
          res.json('title already taken');
         } else {
           
               Project.create({
                 title: data.title,
                 description: data.description,
                 
                 
               })
              
              .then(() => {
                 console.log('project created in db');
                 res.status(200).send({ message: 'project created' });
               });
              }
              }
               
               
               )
              });
            
      }
      
      
  ;


    //console.log(req.body);
//     const info = {
//       _id:req.body._id,
//       title: req.body.title,
//       description: req.body.description,
      
//     };

// if (!req.body.title) {
//   res.status(400).send({
//     message: "Content can not be empty!",
//   });
//   return;
// }
// // save Project in the database
// try {
//   const project =  ProjectModel.create(info);
//   res.status(200).send(project);
//   console.log(project);
// } catch (err) {
//   res.status(500).send({
//     message: err.message || "Error occurred while creating the Project",
//   });
// }
// });
// }

