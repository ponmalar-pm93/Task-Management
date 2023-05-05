const { File} = require('../sequelize');
const path = require('path')
const multer = require('multer')

//const app = express()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')
module.exports = app => {
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send(err.message)
        } else {
            // file was uploaded successfully
            res.send('File uploaded!')
        }
    })
})
}
