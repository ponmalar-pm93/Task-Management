const {File} = require('../sequelize');
//const {Task} =require('../sequelize')
const multer = require('multer');
const path = require('path');
const fs = require('fs');

module.exports = app => {
  app.get('/download', (req, res) => {
    const id = req.query.id;

    //Find the file by ID in the database
    File.findOne({ where: { id: id} })
      .then(file => {
        if (!file) {
          return res.status(404).json({ message: 'File not found' });
        }

        // Construct the path to the file on disk
         filePath = path.join(__dirname, '..', file.filePath);     
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
        console.log("filestream:",filePath);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });
};

    

  
  
  