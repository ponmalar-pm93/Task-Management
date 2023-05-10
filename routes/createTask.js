const {Task} =require('../sequelize')
const { File} = require('../sequelize');
const multer = require('multer');
const path = require('path');
// create project
module.exports = app => {
app.post('/createTask' ,  (req, res) => {
  
    const data = {
      
      title: req.body.title,
      description: req.body.description,
      user_id: req.body.user_id
      
      
    };
    if (data.description === '' || data.title === '') {
      res.json('title and description required');
    }
    Task.findOne({
      where: {
        title: data.title,
      },
    })
      .then(task => {
        if (task != null) {
          console.log('title already taken');
          res.json('title already taken');
         } else {
           
               Task.create({
                 title: data.title,
                 description: data.description,
                 user_id: data.user_id,
                 
               })
              
              .then(() => {
                 console.log('task created in db');
                 res.status(200).send({ message: 'task created' });
               });
              }
              }
               
               
               )
              });
            
      }
      
      
  ;


    