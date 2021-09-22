const multer = require('multer');
const path = require('path');
const { nextTick } = require('process');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        // const ext = path.extname(file.originalname)
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({
    storage:storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image')) {
            cb(null, true)
        }
        else{
            console.log('only image is allowed!');
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;