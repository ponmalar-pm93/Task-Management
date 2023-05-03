const { File} = require('../sequelize');
//const {Task} =require('../sequelize')
const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'Uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
  })
});
module.exports = app => {
app.post('/attachfile', upload.single('file'), (req, res) => {
  
  const { filename, path: filePath ,user_id} = req.file;
  File.create({
    fileName: filename,
    filePath:filePath,
    user_id: user_id
  })
  
  .then(file => {
    res.status(201).json(file);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});
 }















 //module.exports = app => {
  //   app.post('/upload' ,  (req, res) => {
  //   const data =
  //   {
  //     image:req.file.path
  //   }
  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //       cb(null, 'Images')
  //   },
  //   filename: (req, file, cb) => {
  //       cb(null, Date.now() + path.extname(file.originalname))
  //   }
  // })
  
  // const upload = multer({
  //   storage: storage,
  //   limits: { fileSize: '1000000' },
  //   fileFilter: (req, file, cb) => {
  //       const fileTypes = /jpeg|jpg|png|gif/
  //       const mimeType = fileTypes.test(file.mimetype)  
  //       const extname = fileTypes.test(path.extname(file.originalname))
  
  //       if(mimeType && extname) {
  //           return cb(null, true)
  //       }
  //       cb('Give proper files formate to upload')
  //   }
  // }).single('image')
  
  // }
  //   )}