const {File} = require('../sequelize');
//const {Task} =require('../sequelize')
const multer = require('multer');
const path = require('path');
const fs = require('fs');


module.exports = app => {
  app.get('/download', (req, res) => {
    const fileName = req.query.fileName;

    // Find the file by ID in the database
    File.findOne({ where: { fileName: fileName} })
      .then(file => {
        if (!file) {
          return res.status(404).json({ message: 'File not found' });
        }

        // Construct the path to the file on disk
        const filePath = path.join(__dirname, '..', file.filePath);

        // Read the file from disk and stream it to the client
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });
};

    

  
  
  